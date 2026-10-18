import Foundation
import Vision
import ImageIO

// JSON lines in/out keep the OCR worker warm. Bounding boxes use top-left origin.
while let line = readLine() {
    autoreleasepool {
        do {
            guard let input = line.data(using: .utf8),
                  let job = try JSONSerialization.jsonObject(with: input) as? [String: String],
                  let path = job["path"] else {
                throw NSError(domain: "Input", code: 1)
            }
            let request = VNRecognizeTextRequest()
            request.recognitionLevel = .accurate
            request.usesLanguageCorrection = false
            request.minimumTextHeight = 0.004
            let supported = try request.supportedRecognitionLanguages()
            request.recognitionLanguages = ["vi-VN", "en-US"].filter { supported.contains($0) }
            let handler = VNImageRequestHandler(url: URL(fileURLWithPath: path))
            try handler.perform([request])
            let observations: [[String: Any]] = (request.results ?? []).compactMap { item in
                guard let candidate = item.topCandidates(1).first else { return nil }
                let box = item.boundingBox
                return ["text": candidate.string, "confidence": candidate.confidence,
                        "x": box.minX, "y": 1 - box.maxY,
                        "width": box.width, "height": box.height]
            }
            let output = try JSONSerialization.data(withJSONObject: ["observations": observations], options: [.sortedKeys])
            print(String(decoding: output, as: UTF8.self))
        } catch {
            print("{\"error\":\"Text recognition failed\"}")
        }
        fflush(stdout)
    }
}

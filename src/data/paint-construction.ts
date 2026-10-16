import {
  townhouseConstructionCopy,
  type TownhouseConstructionCopy,
} from "./townhouse-construction";
import type { SiteLocale } from "@/lib/locale";
type Card = { title: string; description: string };
export type PaintConstructionCopy = TownhouseConstructionCopy & {
  notesTitle: string;
  notesIntro: string;
  notes: Card[];
};
export const paintConstructionCopy: Record<SiteLocale, PaintConstructionCopy> =
  {
    vi: {
      ...townhouseConstructionCopy.vi,
      heroParts: ["Thi công", "sơn bả"],
      intro:
        "Làm mới diện mạo tổ ấm với bề mặt tường phẳng mịn và màu sắc hài hòa. Sơn bả được lên phương án theo hiện trạng, vật liệu và phong cách nội thất.",
      explore: "Tìm hiểu lỗi thường gặp",
      stylesLabel: "6 lỗi thường gặp",
      stylesTitle: "Chăm chút bề mặt để lớp sơn bền đẹp",
      stylesIntro:
        "Khâu chuẩn bị, vật liệu và cách thi công đều ảnh hưởng đến chất lượng lớp sơn. Nhận diện các lỗi thường gặp để có phương án xử lý phù hợp.",
      styleLabel: "Lỗi cần lưu ý",
      styles: [
        {
          title: "Màng sơn bị rỗ",
          description:
            "Bụi trên bề mặt, dụng cụ chưa sạch hoặc bọt khí trong sơn có thể để lại lỗ nhỏ khi khô. Cần kiểm tra nền tường, dụng cụ và cách pha theo hướng dẫn của sản phẩm.",
        },
        {
          title: "Màng sơn bị nhăn",
          description:
            "Lớp sơn không đều, dụng cụ chưa phù hợp hoặc điều kiện thi công không thuận lợi có thể làm bề mặt nhăn. Chú trọng độ dày lớp phủ và thời gian khô giữa các lớp.",
        },
        {
          title: "Màng sơn bị phồng rộp",
          description:
            "Độ ẩm trong nền tường hoặc việc sơn chồng khi lớp dưới chưa sẵn sàng có thể gây phồng rộp. Kiểm tra nguồn ẩm và điều kiện bề mặt trước khi xử lý.",
        },
        {
          title: "Màng sơn bị bong tróc",
          description:
            "Nền tường yếu, bẩn hoặc hệ sơn không phù hợp có thể khiến lớp phủ mất độ bám. Làm sạch, xử lý nền và chọn lớp lót phù hợp trước khi thi công lại.",
        },
        {
          title: "Bề mặt xuất hiện rêu, mốc",
          description:
            "Vệt đen hoặc xanh làm giảm thẩm mỹ của tường. Cần tìm nguyên nhân ẩm, xử lý bề mặt và lựa chọn hệ sơn phù hợp thay vì chỉ sơn phủ lên vùng mốc.",
        },
        {
          title: "Màu sơn phai hoặc không đều",
          description:
            "Màu sơn có thể thay đổi theo điều kiện sử dụng, nền tường và sản phẩm. Lựa chọn đúng sơn nội thất hoặc ngoại thất, phối màu và thi công đồng đều.",
        },
      ],
      notesTitle: "Ba điểm cần chú ý khi thi công",
      notesIntro:
        "Lên kế hoạch thời gian, trình tự và cách lăn sơn để các bề mặt hoàn thiện thống nhất.",
      notes: [
        {
          title: "Thời gian giữa các lớp",
          description:
            "Đảm bảo lớp dưới đạt điều kiện sơn chồng theo hướng dẫn của nhà sản xuất, kiểm tra bề mặt trước khi thi công tiếp.",
        },
        {
          title: "Trình tự thi công",
          description:
            "Sắp xếp khu vực thi công hợp lý, xử lý chi tiết khó trước và bảo vệ các bề mặt đã hoàn thiện.",
        },
        {
          title: "Kỹ thuật con lăn",
          description:
            "Dùng dụng cụ phù hợp, phân bổ sơn đều và kiểm soát vùng nối để hạn chế vệt và chênh lệch bề mặt.",
        },
      ],
      tipsLabel: "Cam kết dịch vụ",
      tipsTitle: "Tân trang tổ ấm cùng Tổ Ấm Hoàn Hảo",
      tipsIntro:
        "Đội ngũ có kinh nghiệm tư vấn màu sắc, vật liệu và cách hoàn thiện để tổng thể nội thất hài hòa, phù hợp nhu cầu sử dụng.",
      tips: [
        "Tư vấn miễn phí về màu sắc và phương án thi công",
        "Vật tư chính hãng, nguồn gốc rõ ràng",
        "Cập nhật bảng màu và mẫu hoàn thiện",
        "Triển khai theo phương án đã thống nhất",
        "Bàn giao theo tiến độ đã thỏa thuận",
        "Báo giá minh bạch, phù hợp ngân sách",
        "Bảo hành, bảo trì tận tâm và chuyên nghiệp",
      ],
      ideaTitle: "Màu sắc phù hợp, không gian như ý",
      ideaIntro:
        "Trao đổi ý tưởng với đội ngũ để lựa chọn màu sơn và điểm nhấn phù hợp. Chúng tôi phối hợp từng bề mặt để mang đến diện mạo thống nhất cho ngôi nhà.",
      ctaIntro:
        "Miễn phí tư vấn thi công sơn bả, với phương án phù hợp tiến độ và ngân sách.",
    },
    en: {
      ...townhouseConstructionCopy.en,
      heroParts: ["Painting &", "wall finishing"],
      intro:
        "Refresh your home with smooth walls and a harmonious palette. Plan surface preparation and painting around existing conditions, materials and your interior style.",
      explore: "Explore common issues",
      stylesLabel: "6 common issues",
      stylesTitle: "Careful preparation for a lasting finish",
      stylesIntro:
        "Preparation, materials and application all influence paint quality. Recognising common issues helps inform an appropriate repair plan.",
      styleLabel: "Issue to consider",
      styles: [
        {
          title: "Pitted paint",
          description:
            "Dust, unclean tools or air bubbles can leave small holes as paint dries. Check the substrate, tools and mixing instructions for the chosen product.",
        },
        {
          title: "Wrinkled paint",
          description:
            "Uneven coats, unsuitable tools or poor application conditions can cause wrinkling. Pay attention to coat thickness and drying intervals.",
        },
        {
          title: "Blistering paint",
          description:
            "Moisture in the substrate or recoating too early can cause blisters. Check moisture sources and surface conditions before repair.",
        },
        {
          title: "Peeling paint",
          description:
            "Weak or dirty substrates and incompatible coatings can reduce adhesion. Clean and prepare the surface and choose a suitable primer before repainting.",
        },
        {
          title: "Algae or mould on the surface",
          description:
            "Dark or green marks spoil the appearance of walls. Investigate moisture, treat the surface and select a suitable coating rather than simply painting over affected areas.",
        },
        {
          title: "Faded or uneven colour",
          description:
            "Colour can change with exposure, substrate conditions and the product used. Select the correct interior or exterior paint and apply it consistently.",
        },
      ],
      notesTitle: "Three points for a consistent finish",
      notesIntro:
        "Plan drying intervals, the sequence of work and roller application to bring finished surfaces together.",
      notes: [
        {
          title: "Recoating intervals",
          description:
            "Allow each coat to reach the manufacturer’s recommended condition for recoating and inspect the surface before continuing.",
        },
        {
          title: "Work sequence",
          description:
            "Plan the areas to be painted, tackle difficult details first and protect finished surfaces.",
        },
        {
          title: "Roller technique",
          description:
            "Use suitable tools, distribute paint evenly and control joins to minimise visible marks and variations.",
        },
      ],
      tipsLabel: "Our service commitments",
      tipsTitle: "Refresh your home with Tổ Ấm Hoàn Hảo",
      tipsIntro:
        "Our experienced team advises on colours, materials and finishes for an interior that is balanced and suited to everyday use.",
      tips: [
        "Free advice on colours and the work plan",
        "Genuine materials with clear origins",
        "Current colour palettes and finish samples",
        "Work follows the agreed specification",
        "Handover according to the agreed schedule",
        "Transparent quotes suited to your budget",
        "Attentive, professional warranty and maintenance",
      ],
      ideaTitle: "The right colours for your home",
      ideaIntro:
        "Share your ideas with the team to choose suitable colours and accents. We coordinate each surface for a coherent result.",
      ctaIntro:
        "Free advice on painting and wall finishing, with a plan suited to your schedule and budget.",
    },
    ja: {
      ...townhouseConstructionCopy.ja,
      heroParts: ["塗装・", "壁面仕上げ"],
      intro:
        "滑らかな壁と調和のとれた色で住まいを一新。現状、素材、インテリアに合わせて下地処理と塗装を計画します。",
      explore: "よくある不具合を見る",
      stylesLabel: "よくある6つの不具合",
      stylesTitle: "丁寧な下地処理で美しい仕上がりへ",
      stylesIntro:
        "下地、素材、施工方法は塗膜の品質に影響します。不具合の特徴を確認し、適切な補修方法を検討します。",
      styleLabel: "確認する不具合",
      styles: [
        {
          title: "塗膜の小さな穴",
          description:
            "ほこり、汚れた道具、気泡で乾燥後に小さな穴が残ることがあります。下地、道具、製品の希釈方法を確認します。",
        },
        {
          title: "塗膜のしわ",
          description:
            "塗りむら、不適切な道具、施工環境が原因になることがあります。塗膜の厚さと乾燥時間に配慮します。",
        },
        {
          title: "塗膜のふくれ",
          description:
            "下地の湿気や早すぎる重ね塗りで生じることがあります。補修前に水分の原因と表面の状態を調べます。",
        },
        {
          title: "塗膜のはがれ",
          description:
            "弱い下地、汚れ、塗料の不適合で密着性が低下することがあります。清掃と下地処理を行い、適切な下塗り材を選びます。",
        },
        {
          title: "藻・かびの発生",
          description:
            "黒や緑の跡は壁の美観を損ないます。湿気の原因を確認し、表面処理と塗料選びを行います。上から塗るだけでは済ませません。",
        },
        {
          title: "色あせ・色むら",
          description:
            "使用環境、下地、製品により色が変化することがあります。屋内・屋外に適した塗料を選び、均一に施工します。",
        },
      ],
      notesTitle: "仕上がりをそろえる3つのポイント",
      notesIntro: "乾燥時間、施工順序、ローラーの使い方を計画します。",
      notes: [
        {
          title: "重ね塗りまでの時間",
          description:
            "メーカーの推奨条件に達しているか確認し、表面を点検してから次の塗装へ進みます。",
        },
        {
          title: "施工順序",
          description:
            "作業する場所を整理し、難しい細部から取り掛かり、仕上がった面を保護します。",
        },
        {
          title: "ローラーの使い方",
          description: "適切な道具で均等に塗り、継ぎ目や塗りむらを抑えます。",
        },
      ],
      tipsLabel: "サービスの約束",
      tipsTitle: "Tổ Ấm Hoàn Hảoと住まいを一新",
      tipsIntro:
        "経験あるチームが配色、素材、仕上げをご提案し、暮らしに合う調和した内装を目指します。",
      tips: [
        "配色と施工計画の無料相談",
        "出所が明確な正規の材料",
        "配色表と仕上げサンプルをご案内",
        "合意した仕様に沿って施工",
        "合意した工期でお引き渡し",
        "予算に合う明確なお見積もり",
        "丁寧な保証とメンテナンス",
      ],
      ideaTitle: "住まいに合う色を一緒に",
      ideaIntro:
        "アイデアをお聞かせください。色やアクセントを選び、一つひとつの面を調和させます。",
      ctaIntro:
        "塗装・壁面仕上げについて、工期とご予算に合う計画を無料でご相談いただけます。",
    },
    ko: {
      ...townhouseConstructionCopy.ko,
      heroParts: ["도장 및", "벽면 마감"],
      intro:
        "매끄러운 벽과 조화로운 색상으로 집을 새롭게 합니다. 현장 상태, 자재, 인테리어에 맞춰 바탕 처리와 도장을 계획합니다.",
      explore: "주요 문제 살펴보기",
      stylesLabel: "흔한 문제 6가지",
      stylesTitle: "오래가는 마감을 위한 세심한 준비",
      stylesIntro:
        "바탕 처리, 자재, 시공 방법 모두 도장 품질에 영향을 줍니다. 문제를 파악해 적합한 보수 방안을 검토합니다.",
      styleLabel: "확인할 문제",
      styles: [
        {
          title: "도막의 작은 구멍",
          description:
            "먼지, 오염된 도구, 기포 때문에 건조 후 작은 구멍이 남을 수 있습니다. 바탕과 도구, 제품의 배합 지침을 확인합니다.",
        },
        {
          title: "도막 주름",
          description:
            "불균일한 도포, 부적합한 도구, 시공 환경이 원인일 수 있습니다. 도막 두께와 건조 간격을 관리합니다.",
        },
        {
          title: "도막 부풀음",
          description:
            "바탕의 습기나 너무 빠른 재도장이 원인일 수 있습니다. 보수 전 습기의 원인과 표면 상태를 확인합니다.",
        },
        {
          title: "도막 벗겨짐",
          description:
            "약한 바탕, 오염, 부적합한 도료는 접착력을 떨어뜨릴 수 있습니다. 표면을 정리하고 적합한 프라이머를 선택합니다.",
        },
        {
          title: "이끼와 곰팡이",
          description:
            "검거나 초록색 얼룩은 벽의 미관을 해칩니다. 덧칠만 하기보다 습기의 원인을 조사하고 표면 처리와 적합한 도료를 검토합니다.",
        },
        {
          title: "변색과 색상 불균일",
          description:
            "사용 환경, 바탕, 제품에 따라 색이 달라질 수 있습니다. 실내외 용도에 맞는 도료를 선택하고 고르게 시공합니다.",
        },
      ],
      notesTitle: "균일한 마감을 위한 세 가지",
      notesIntro: "건조 간격, 작업 순서, 롤러 사용 방법을 계획합니다.",
      notes: [
        {
          title: "재도장 간격",
          description:
            "제조사의 권장 재도장 조건에 도달했는지 확인하고 표면을 점검한 후 계속합니다.",
        },
        {
          title: "작업 순서",
          description:
            "구역을 계획하고 어려운 세부 부분을 먼저 처리하며 완성된 표면을 보호합니다.",
        },
        {
          title: "롤러 기법",
          description:
            "적합한 도구로 도료를 고르게 배분하고 연결 부위의 자국과 차이를 줄입니다.",
        },
      ],
      tipsLabel: "서비스 약속",
      tipsTitle: "Tổ Ấm Hoàn Hảo와 새롭게 꾸미는 집",
      tipsIntro:
        "경험 많은 팀이 색상, 자재, 마감을 제안해 생활에 맞는 조화로운 공간을 만듭니다.",
      tips: [
        "색상과 시공 계획 무료 상담",
        "출처가 명확한 정품 자재",
        "색상표와 마감 샘플 안내",
        "합의한 사양에 따른 시공",
        "합의한 일정에 맞춰 인도",
        "예산에 맞는 투명한 견적",
        "세심하고 전문적인 보증과 유지보수",
      ],
      ideaTitle: "집에 어울리는 색상을 함께",
      ideaIntro:
        "팀과 아이디어를 나누고 색상과 포인트를 선택하세요. 각 표면을 조율해 통일된 결과를 만듭니다.",
      ctaIntro:
        "일정과 예산에 맞는 도장 및 벽면 마감 방안을 무료로 상담해 드립니다.",
    },
    sv: {
      ...townhouseConstructionCopy.sv,
      heroParts: ["Målning och", "väggbehandling"],
      intro:
        "Förnya ditt hem med släta väggar och en harmonisk färgskala. Planera underarbete och målning efter befintligt skick, material och inredningsstil.",
      explore: "Utforska vanliga problem",
      stylesLabel: "6 vanliga problem",
      stylesTitle: "Noggrant underarbete för ett hållbart resultat",
      stylesIntro:
        "Förberedelser, material och applicering påverkar färgens kvalitet. Känn igen vanliga problem för att planera en lämplig åtgärd.",
      styleLabel: "Problem att se över",
      styles: [
        {
          title: "Små hål i färgskiktet",
          description:
            "Damm, smutsiga verktyg eller luftbubblor kan lämna små hål när färgen torkar. Kontrollera underlag, verktyg och produktens blandningsanvisningar.",
        },
        {
          title: "Skrynklig färg",
          description:
            "Ojämna skikt, olämpliga verktyg eller dåliga förhållanden kan ge skrynklor. Var uppmärksam på skikttjocklek och torktid.",
        },
        {
          title: "Blåsor i färgen",
          description:
            "Fukt i underlaget eller för tidig övermålning kan orsaka blåsor. Undersök fuktkällor och ytan före åtgärd.",
        },
        {
          title: "Flagnande färg",
          description:
            "Svagt eller smutsigt underlag och fel färgsystem kan försämra vidhäftningen. Rengör och förbered ytan samt välj lämplig grundfärg.",
        },
        {
          title: "Alger eller mögel",
          description:
            "Mörka eller gröna fläckar försämrar väggens utseende. Utred fukt, behandla ytan och välj rätt färg i stället för att bara måla över.",
        },
        {
          title: "Blekt eller ojämn kulör",
          description:
            "Kulören kan förändras med exponering, underlag och produktval. Välj rätt färg för inom- eller utomhusbruk och applicera jämnt.",
        },
      ],
      notesTitle: "Tre punkter för ett jämnt resultat",
      notesIntro: "Planera torktider, arbetsordning och rollerteknik.",
      notes: [
        {
          title: "Tid mellan strykningarna",
          description:
            "Följ tillverkarens rekommenderade villkor för övermålning och kontrollera ytan innan du fortsätter.",
        },
        {
          title: "Arbetsordning",
          description:
            "Planera ytorna, hantera svåra detaljer först och skydda färdigmålade partier.",
        },
        {
          title: "Rollerteknik",
          description:
            "Använd lämpliga verktyg, fördela färgen jämnt och kontrollera skarvar för att minska märken och variationer.",
        },
      ],
      tipsLabel: "Våra serviceåtaganden",
      tipsTitle: "Förnya hemmet med Tổ Ấm Hoàn Hảo",
      tipsIntro:
        "Vårt erfarna team ger råd om kulörer, material och ytskikt för ett balanserat hem som passar vardagen.",
      tips: [
        "Kostnadsfria råd om kulörer och arbetsplan",
        "Äkta material med tydligt ursprung",
        "Aktuella färgkartor och ytprover",
        "Arbete enligt överenskommen specifikation",
        "Överlämning enligt avtalad tidsplan",
        "Tydliga offerter efter din budget",
        "Omtänksam garanti och professionellt underhåll",
      ],
      ideaTitle: "Rätt färger för ditt hem",
      ideaIntro:
        "Dela dina idéer med teamet för att välja passande färger och accenter. Vi samordnar ytorna till en helhet.",
      ctaIntro:
        "Kostnadsfri rådgivning om målning och väggbehandling efter din tidsplan och budget.",
    },
    fr: {
      ...townhouseConstructionCopy.fr,
      heroParts: ["Peinture et", "enduits"],
      intro:
        "Renouvelez votre intérieur avec des murs lisses et des couleurs harmonieuses. La préparation et la peinture sont prévues selon l’existant, les matériaux et le style souhaité.",
      explore: "Découvrir les défauts courants",
      stylesLabel: "6 défauts courants",
      stylesTitle: "Une préparation soignée pour une belle finition",
      stylesIntro:
        "Préparation, matériaux et application influencent la qualité de la peinture. Identifier les défauts aide à choisir une réparation adaptée.",
      styleLabel: "Défaut à examiner",
      styles: [
        {
          title: "Petits cratères dans la peinture",
          description:
            "Poussière, outils sales ou bulles d’air peuvent laisser de petits trous au séchage. Vérifiez le support, les outils et les consignes de mélange du produit.",
        },
        {
          title: "Peinture plissée",
          description:
            "Des couches irrégulières, des outils inadaptés ou de mauvaises conditions peuvent provoquer des plis. Surveillez l’épaisseur et le séchage entre couches.",
        },
        {
          title: "Cloques",
          description:
            "L’humidité du support ou une couche appliquée trop tôt peuvent créer des cloques. Vérifiez les sources d’humidité et l’état de surface avant réparation.",
        },
        {
          title: "Écaillage",
          description:
            "Un support fragile ou sale et des revêtements incompatibles peuvent réduire l’adhérence. Nettoyez, préparez et choisissez une sous-couche adaptée.",
        },
        {
          title: "Algues ou moisissures",
          description:
            "Les traces sombres ou vertes altèrent l’aspect des murs. Recherchez l’humidité, traitez le support et choisissez le système adapté plutôt que de simplement recouvrir.",
        },
        {
          title: "Couleur passée ou irrégulière",
          description:
            "La couleur peut évoluer selon l’exposition, le support et le produit. Choisissez une peinture adaptée à l’intérieur ou à l’extérieur et appliquez-la régulièrement.",
        },
      ],
      notesTitle: "Trois points pour un rendu homogène",
      notesIntro:
        "Planifiez les temps de séchage, l’ordre des travaux et l’application au rouleau.",
      notes: [
        {
          title: "Délai entre couches",
          description:
            "Respectez les conditions de recouvrement recommandées par le fabricant et inspectez la surface avant de poursuivre.",
        },
        {
          title: "Ordre des travaux",
          description:
            "Organisez les zones, traitez les détails difficiles en premier et protégez les finitions réalisées.",
        },
        {
          title: "Technique au rouleau",
          description:
            "Utilisez les outils adaptés, répartissez la peinture uniformément et contrôlez les raccords pour limiter les traces.",
        },
      ],
      tipsLabel: "Nos engagements",
      tipsTitle: "Rafraîchissez votre foyer avec Tổ Ấm Hoàn Hảo",
      tipsIntro:
        "Notre équipe expérimentée conseille les couleurs, matériaux et finitions pour un intérieur équilibré et adapté à vos usages.",
      tips: [
        "Conseils gratuits sur les couleurs et les travaux",
        "Matériaux authentiques à l’origine claire",
        "Nuanciers et échantillons de finition actuels",
        "Travaux selon les spécifications convenues",
        "Livraison selon le calendrier convenu",
        "Devis transparents adaptés au budget",
        "Garantie et entretien attentifs et professionnels",
      ],
      ideaTitle: "Les bonnes couleurs pour votre intérieur",
      ideaIntro:
        "Partagez vos idées pour choisir couleurs et accents. Nous coordonnons les surfaces pour un résultat cohérent.",
      ctaIntro:
        "Conseils gratuits sur la peinture et les enduits, selon votre calendrier et votre budget.",
    },
    ru: {
      ...townhouseConstructionCopy.ru,
      heroParts: ["Покраска и", "шпаклёвка"],
      intro:
        "Обновите дом с помощью гладких стен и гармоничной палитры. Подготовка и покраска планируются с учётом состояния поверхностей, материалов и стиля интерьера.",
      explore: "Частые проблемы",
      stylesLabel: "6 частых дефектов",
      stylesTitle: "Тщательная подготовка для красивого покрытия",
      stylesIntro:
        "Подготовка, материалы и нанесение влияют на качество краски. Определение дефектов помогает выбрать подходящий способ ремонта.",
      styleLabel: "На что обратить внимание",
      styles: [
        {
          title: "Мелкие отверстия в покрытии",
          description:
            "Пыль, грязные инструменты или пузырьки воздуха могут оставлять отверстия после высыхания. Проверьте основание, инструменты и инструкции по смешиванию.",
        },
        {
          title: "Сморщивание краски",
          description:
            "Неравномерные слои, неподходящие инструменты и условия могут вызывать складки. Следите за толщиной слоёв и временем высыхания.",
        },
        {
          title: "Вздутия покрытия",
          description:
            "Влага в основании или слишком раннее нанесение следующего слоя могут вызвать пузыри. До ремонта проверьте источник влаги и поверхность.",
        },
        {
          title: "Отслаивание краски",
          description:
            "Слабое или грязное основание и несовместимые покрытия могут снижать сцепление. Очистите и подготовьте поверхность, подберите подходящую грунтовку.",
        },
        {
          title: "Водоросли или плесень",
          description:
            "Тёмные и зелёные следы портят вид стен. Выясните причину сырости, обработайте основание и выберите покрытие вместо простого закрашивания.",
        },
        {
          title: "Выцветание или неоднородный цвет",
          description:
            "Цвет может меняться из-за условий, основания и выбранного продукта. Используйте краску для нужной области применения и наносите равномерно.",
        },
      ],
      notesTitle: "Три условия ровного покрытия",
      notesIntro: "Спланируйте высыхание, порядок работ и нанесение валиком.",
      notes: [
        {
          title: "Интервалы между слоями",
          description:
            "Соблюдайте рекомендованные производителем условия повторного нанесения и осматривайте поверхность перед продолжением.",
        },
        {
          title: "Порядок работ",
          description:
            "Распланируйте зоны, начните со сложных деталей и защищайте готовые поверхности.",
        },
        {
          title: "Работа валиком",
          description:
            "Используйте подходящие инструменты, равномерно распределяйте краску и контролируйте стыки, уменьшая следы и различия.",
        },
      ],
      tipsLabel: "Наши обязательства",
      tipsTitle: "Обновите дом с Tổ Ấm Hoàn Hảo",
      tipsIntro:
        "Опытная команда помогает выбрать цвета, материалы и покрытия для гармоничного и удобного интерьера.",
      tips: [
        "Бесплатные консультации по цвету и плану работ",
        "Подлинные материалы с понятным происхождением",
        "Актуальные палитры и образцы покрытий",
        "Работа по согласованной спецификации",
        "Сдача в согласованные сроки",
        "Прозрачные сметы под ваш бюджет",
        "Внимательная гарантия и профессиональное обслуживание",
      ],
      ideaTitle: "Подходящие цвета для вашего дома",
      ideaIntro:
        "Поделитесь идеями с командой, чтобы выбрать цвета и акценты. Мы согласуем поверхности для цельного результата.",
      ctaIntro:
        "Бесплатная консультация по покраске и шпаклёвке с учётом сроков и бюджета.",
    },
    es: {
      ...townhouseConstructionCopy.es,
      heroParts: ["Pintura y", "alisado de paredes"],
      intro:
        "Renueva tu hogar con paredes lisas y colores armoniosos. Planificamos preparación y pintura según el estado existente, los materiales y el estilo interior.",
      explore: "Ver problemas habituales",
      stylesLabel: "6 problemas habituales",
      stylesTitle: "Una preparación cuidada para un buen acabado",
      stylesIntro:
        "La preparación, los materiales y la aplicación influyen en la calidad. Reconocer los defectos ayuda a planificar una reparación adecuada.",
      styleLabel: "Problema a revisar",
      styles: [
        {
          title: "Pequeños cráteres",
          description:
            "El polvo, las herramientas sucias o las burbujas pueden dejar pequeños agujeros al secarse. Revisa el soporte, los útiles y las instrucciones de mezcla.",
        },
        {
          title: "Pintura arrugada",
          description:
            "Las capas irregulares, las herramientas inadecuadas o las condiciones desfavorables pueden causar arrugas. Controla el espesor y los tiempos de secado.",
        },
        {
          title: "Ampollas en la pintura",
          description:
            "La humedad del soporte o repintar demasiado pronto pueden provocar ampollas. Revisa la fuente de humedad y la superficie antes de reparar.",
        },
        {
          title: "Pintura descascarillada",
          description:
            "Un soporte débil o sucio y las capas incompatibles pueden reducir la adherencia. Limpia, prepara y elige una imprimación adecuada.",
        },
        {
          title: "Algas o moho",
          description:
            "Las marcas oscuras o verdes alteran el aspecto de las paredes. Investiga la humedad, trata la superficie y elige el sistema adecuado en lugar de cubrir sin más.",
        },
        {
          title: "Color desvaído o desigual",
          description:
            "El color puede cambiar según la exposición, el soporte y el producto. Elige pintura interior o exterior según el uso y aplícala de forma uniforme.",
        },
      ],
      notesTitle: "Tres claves para un acabado uniforme",
      notesIntro:
        "Planifica el secado, el orden de trabajo y la técnica con rodillo.",
      notes: [
        {
          title: "Intervalos entre capas",
          description:
            "Respeta las condiciones de repintado recomendadas por el fabricante e inspecciona la superficie antes de continuar.",
        },
        {
          title: "Orden de trabajo",
          description:
            "Organiza las zonas, trata primero los detalles difíciles y protege las superficies terminadas.",
        },
        {
          title: "Técnica con rodillo",
          description:
            "Utiliza herramientas adecuadas, reparte la pintura y controla las uniones para reducir marcas y variaciones.",
        },
      ],
      tipsLabel: "Nuestros compromisos",
      tipsTitle: "Renueva tu hogar con Tổ Ấm Hoàn Hảo",
      tipsIntro:
        "Nuestro equipo asesora sobre colores, materiales y acabados para un interior equilibrado y práctico.",
      tips: [
        "Asesoramiento gratuito sobre colores y trabajos",
        "Materiales originales de origen claro",
        "Paletas y muestras de acabado actuales",
        "Trabajo según las especificaciones acordadas",
        "Entrega según el calendario acordado",
        "Presupuestos transparentes y adecuados",
        "Garantía y mantenimiento atentos y profesionales",
      ],
      ideaTitle: "Los colores adecuados para tu hogar",
      ideaIntro:
        "Comparte tus ideas para elegir colores y acentos. Coordinamos cada superficie para un resultado coherente.",
      ctaIntro:
        "Asesoramiento gratuito sobre pintura y alisado según tus plazos y presupuesto.",
    },
    zh: {
      ...townhouseConstructionCopy.zh,
      heroParts: ["墙面", "批刮与涂装"],
      intro:
        "以平整墙面与协调色彩焕新家园。根据现状、材料和室内风格规划基层处理与涂装。",
      explore: "了解常见问题",
      stylesLabel: "6种常见问题",
      stylesTitle: "细致处理，让涂层更美观耐用",
      stylesIntro:
        "基层处理、材料与施工方法都会影响涂层品质。识别常见问题，有助于制定合适的修复方案。",
      styleLabel: "需要注意的问题",
      styles: [
        {
          title: "涂层针孔",
          description:
            "表面灰尘、工具不洁或涂料气泡，可能在干燥后留下小孔。检查基层、工具与产品调配说明。",
        },
        {
          title: "涂层起皱",
          description:
            "涂层不均、工具不适或施工环境不佳，可能导致起皱。关注涂层厚度与层间干燥时间。",
        },
        {
          title: "涂层起泡",
          description:
            "基层湿气或过早重涂，可能导致起泡。修复前检查潮湿来源与表面条件。",
        },
        {
          title: "涂层剥落",
          description:
            "基层松弱、脏污或涂层不兼容，可能影响附着力。清洁并处理基层，选择合适底漆后再施工。",
        },
        {
          title: "表面滋生藻类或霉菌",
          description:
            "黑色或绿色痕迹影响墙面美观。调查湿气来源、处理表面并选择合适涂层，而非直接覆盖。",
        },
        {
          title: "褪色或颜色不均",
          description:
            "使用环境、基层和产品可能导致色彩变化。选择适用于室内或室外的涂料，并均匀施工。",
        },
      ],
      notesTitle: "均匀饰面的三个要点",
      notesIntro: "合理安排干燥时间、施工顺序与滚涂方法。",
      notes: [
        {
          title: "层间时间",
          description: "遵循厂家建议的重涂条件，检查表面后再进行下一道工序。",
        },
        {
          title: "施工顺序",
          description: "规划施工区域，先处理复杂细节，并保护已完成表面。",
        },
        {
          title: "滚涂方法",
          description:
            "使用适合的工具，均匀分布涂料，控制接缝以减少痕迹和差异。",
        },
      ],
      tipsLabel: "服务承诺",
      tipsTitle: "与Tổ Ấm Hoàn Hảo一起焕新家园",
      tipsIntro:
        "经验丰富的团队提供配色、材料和饰面建议，打造协调而实用的室内空间。",
      tips: [
        "免费咨询配色与施工方案",
        "来源清晰的正规材料",
        "提供色卡与饰面样板",
        "按约定方案实施",
        "按约定进度交付",
        "报价透明，符合预算",
        "专业、细致的保修与维护",
      ],
      ideaTitle: "为家选择合适的色彩",
      ideaIntro:
        "与团队分享想法，选择配色与亮点。我们协调每个表面，呈现统一效果。",
      ctaIntro: "免费咨询墙面批刮与涂装，提供符合工期与预算的方案。",
    },
  };

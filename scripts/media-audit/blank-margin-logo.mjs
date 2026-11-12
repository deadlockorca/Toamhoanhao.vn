import sharp from 'sharp';

// Drawings opt in: never place the logo over plan geometry or annotations.
export async function blankMarginLogo(source, logo, preferredRatio = .19, minimumChannel = 245) {
  if (!Number.isInteger(minimumChannel) || minimumChannel < 230 || minimumChannel > 255)
    throw Error('Invalid reviewed blank-margin brightness threshold');
  const {width, height, channels} = source.info;
  const pad = Math.max(8, Math.round(Math.min(width,height)*.012));
  for (const ratio of [preferredRatio,.16,.12,.10,.08,.06]) {
    const stamp = await sharp(logo).resize({width:Math.round(width*ratio)}).png().toBuffer({resolveWithObject:true});
    const w=stamp.info.width,h=stamp.info.height;
    const xs=[Math.round((width-w)/2),pad,width-pad-w,Math.round(width*.25-w/2),Math.round(width*.75-w/2)];
    const ys=[height-Math.max(12,Math.round(height*.025))-h,pad,Math.round(height*.06),Math.round(height*.12),Math.round(height*.85)-h];
    for (const top of ys) for (const left of xs) {
      if(left<pad||top<pad||left+w>width-pad||top+h>height-pad)continue;
      if(!(top+h<=height*.25||top>=height*.75))continue;
      let blank=true;
      // Include a small guard band so the logo cannot touch neighbouring text.
      for(let y=Math.max(0,top-3);y<Math.min(height,top+h+3)&&blank;y++)
        for(let x=Math.max(0,left-3);x<Math.min(width,left+w+3);x++) {
          const i=(y*width+x)*channels;
          if(source.data[i]<minimumChannel||source.data[i+1]<minimumChannel||source.data[i+2]<minimumChannel){blank=false;break;}
        }
      if(blank)return {stamp,box:{left,top,width:w,height:h,bottomMargin:height-top-h,visibleWidthRatio:ratio,blankBackgroundVerified:true,minimumChannel}};
    }
  }
  throw Error('No verified blank outer margin; inspect drawing individually');
}

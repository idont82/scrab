if(typeof NetFunnel == "object"){

	//data:image/png;base64, 제외하고 값만 입력
	//base64 image encoding을 통해 사전에 이미지를 텍스트로 변환하여, 대기창이 처리되는 시점에 시스템 리소스를 사용하지 않도록 구현
	var logoData = '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';

/////////////////////////////////////////////////////////////////////////////////////////////////
/*

	//접속대기 팝업창, mobile
	NetFunnel.SkinUtil.add('nfSkin-1', {
		htmlStr: '\
		<div id="NetFunnel_Skin_Top" style="display: flex;justify-content: center;align-items: center;overflow-y: hidden;position: fixed;left: 0;top: 0;width:100%;height:100%;color: #000;background-color: #fff;">\
			<div style="overflow-y: auto;width: 100%;height: 100%;">\
				<div style="padding: 0 30px;margin: auto;max-width: 600px;">\
					<div>\
						<img style="display: block;margin: 15% auto 8%;width:212px; height: 70px; border: none;" src="data:image/gif;base64,'+ logoData + '">\
					</div>\
					<div style="text-align: center;font-size: 26px;font-weight: bold;">동시접속자가 많아<br>잠시 대기중입니다.</div>\
					<div style="margin-top: 10%;padding: 8% 10% 10%;max-height: 160px;box-shadow: 0 0 11px rgba(0, 0, 0, .11);">\
					<div style="display: flex;justify-content: center;align-items: center;gap: 20px;">\
						<div style="font-size: 18px;color: #999;">예상 대기시간 : </div>\
						<div id="NetFunnel_Loading_Popup_TimeLeft" class="%H시간 %M분 %02S초^ ^false^font-size:15px !important;color:#525252;" style="font-weight: 700;font-size: 31px;color: #000;"> 01시간 01분 13초 </div>\
					</div>\
					<div style="margin-top: 30px;width:100%; height: 10px; visibility: visible;" id="NetFunnel_Loading_Popup_Progressbar"></div> \
					</div>\
					<div style="margin: 8% 0 6%;line-height; 2;text-align: center;font-size: 21px;color:#999;">대기인원 : <b><span style="font-size: 26px;color:#000"><span id="NetFunnel_Loading_Popup_Count" class="'+ NetFunnel.TS_LIMIT_TEXT + '"></span></span></b> 명</div> \
					</div>\
					<div style="margin: 4% auto 6%;text-align: center;font-size: 16px;color: #999;">다시 접속하시면 대기시간이 늘어나니 유의해주세요.</div>\
				</div>\
			</div>\
		</div>'
	}, 'mobile');
	*/

	var orgLanguage = com.getCookie('language') || navigator.language || navigator.userLanguage;
	let locale = orgLanguage.toLowerCase().substring(0,2);
	
	if (locale == 'ko') {
		//접속대기 팝업창, PC
		NetFunnel.SkinUtil.add('nfSkin-1', {
			htmlStr: '\
			<div id="NetFunnel_Skin_Top" style="display: flex;justify-content: center;align-items: center;overflow-y: hidden;position: fixed;left: 0;top: 0;width:100%;height:100%;color: #000;background-color: #fff;">\
				<div style="overflow-y: auto;width: 100%;height: 100%;">\
					<div style="padding: 0 30px;margin: auto;max-width: 600px;">\
						<div>\
							<img style="display: block;margin: 15% auto 8%;width:212px; height: 70px; border: none;" src="data:image/gif;base64,'+ logoData +'">\
						</div>\
						<div style="font-family: Univers LT W04_55 Roman1475960;text-align: center;font-size: 26px;font-weight: bold;">동시접속자가 많아 잠시 대기 중입니다.</div>\
						<div style="margin-top: 10%;padding: 8% 10% 10%;max-height: 160px;box-shadow: 0 0 11px rgba(0, 0, 0, .11);">\
						<div style="display: flex;justify-content: center;align-items: center;gap: 20px;">\
							<div style="font-family: Univers LT W04_55 Roman1475960;font-size: 18px;color: #999;">예상 대기시간 : </div>\
							<div id="NetFunnel_Loading_Popup_TimeLeft" class="%H시간 %M분 %02S초^ ^false^font-size:15px !important;color:#525252;" style="font-family: Univers LT W04_55 Roman1475960;font-weight: 700;font-size: 31px;color: #000;"> 01시간 01분 13초 </div>\
						</div>\
						<div style="margin-top: 30px;width:100%; height: 10px; visibility: visible;" id="NetFunnel_Loading_Popup_Progressbar"></div> \
						</div>\
						<div style="font-family: Univers LT W04_55 Roman1475960;margin: 8% 0;line-height; 2;text-align: center;font-size: 21px;color:#999;">대기인원 : <b><span style="font-size: 26px;color:#000"><span id="NetFunnel_Loading_Popup_Count" class="'+ NetFunnel.TS_LIMIT_TEXT + '"></span></span></b> 명</div> \
						</div>\
						<div style="font-family: Univers LT W04_55 Roman1475960;margin: 4% auto 6%;text-align: center;font-size: 16px;color: #999;">다시 접속하시면 대기시간이 늘어나니 유의해주세요.</div>\
					</div>\
				</div>\
			</div>'
		}, 'normal');
		
		//접속대기 팝업창, PC
		NetFunnel.SkinUtil.add('nfSkin-1', {
			htmlStr: '\
			<div id="NetFunnel_Skin_Top" style="display: flex;justify-content: center;align-items: center;overflow-y: hidden;position: fixed;left: 0;top: 0;width:100%;height:100%;color: #000;background-color: #fff;">\
				<div style="overflow-y: auto;width: 100%;height: 100%;">\
					<div style="padding: 0 30px;margin: auto;max-width: 600px;">\
						<div>\
							<img style="display: block;margin: 15% auto 8%;width:212px; height: 70px; border: none;" src="data:image/gif;base64,'+ logoData +'">\
						</div>\
						<div style="font-family: Univers LT W04_55 Roman1475960;text-align: center;font-size: 26px;font-weight: bold;">동시접속자가 많아 잠시 대기 중입니다.</div>\
						<div style="margin-top: 10%;padding: 8% 10% 10%;max-height: 160px;box-shadow: 0 0 11px rgba(0, 0, 0, .11);">\
						<div style="display: flex;justify-content: center;align-items: center;gap: 20px;">\
							<div style="font-family: Univers LT W04_55 Roman1475960;font-size: 18px;color: #999;">예상 대기시간 : </div>\
							<div id="NetFunnel_Loading_Popup_TimeLeft" class="%H시간 %M분 %02S초^ ^false^font-size:15px !important;color:#525252;" style="font-family: Univers LT W04_55 Roman1475960;font-weight: 700;font-size: 31px;color: #000;"> 01시간 01분 13초 </div>\
						</div>\
						<div style="margin-top: 30px;width:100%; height: 10px; visibility: visible;" id="NetFunnel_Loading_Popup_Progressbar"></div> \
						</div>\
						<div style="font-family: Univers LT W04_55 Roman1475960;margin: 8% 0;line-height; 2;text-align: center;font-size: 21px;color:#999;">대기인원 : <b><span style="font-size: 26px;color:#000"><span id="NetFunnel_Loading_Popup_Count" class="'+ NetFunnel.TS_LIMIT_TEXT + '"></span></span></b> 명</div> \
						</div>\
						<div style="font-family: Univers LT W04_55 Roman1475960;margin: 4% auto 6%;text-align: center;font-size: 16px;color: #999;">다시 접속하시면 대기시간이 늘어나니 유의해주세요.</div>\
					</div>\
				</div>\
			</div>'
		}, 'mobile');
		
	} else {
		//접속대기 팝업창, pc, eng
		NetFunnel.SkinUtil.add('nfSkin-eng', {
			htmlStr: '\
			<div id="NetFunnel_Skin_Top" style="display: flex;justify-content: center;align-items: center;overflow-y: hidden;position: fixed;left: 0;top: 0;width:100%;height:100%;color: #000;background-color: #fff;">\
				<div style="overflow-y: auto;width: 100%;height: 100%;">\
					<div style="padding: 0 30px;margin: auto;max-width: 600px;">\
						<div>\
							<img style="display: block;margin: 15% auto 8%;width:212px; height: 70px; border: none;" src="data:image/gif;base64,'+ logoData + '">\
						</div>\
						<div style="font-family : Univers LT W04_55 Roman1475960;text-align: center;font-size: 24px;font-weight: bold;letter-spacing: -1px;">We are currently experiencing a high volume of traffic. Please give us a moment.</div>\
						<div style="margin-top: 10%;padding: 8% 10% 10%;max-height: 160px;box-shadow: 0 0 11px rgba(0, 0, 0, .11);">\
						<div style="text-align: center;">\
							<div style="font-family : Univers LT W04_55 Roman1475960;font-size: 18px;color: #999;">Your estimated wait time : </div>\
							<div id="NetFunnel_Loading_Popup_TimeLeft" class="%Hhour(s) %Mminute(s) %02Ssecond(s)^ ^false^font-size:15px !important;color:#525252;" style="font-family : Univers LT W04_55 Roman1475960;font-weight: 700;font-size: 31px;color: #000;"> 01hour(s) 01minute(s) 13second(s) </div>\
						</div>\
						<div style="margin-top: 30px;width:100%; height: 10px; visibility: visible;" id="NetFunnel_Loading_Popup_Progressbar"></div> \
						</div>\
						<div style="font-family : Univers LT W04_55 Roman1475960;margin: 8% 0 6%;line-height; 2;text-align: center;font-size: 21px;color:#999;">Number of users ahead of you : <b><span style="font-size: 26px;color:#000"><span id="NetFunnel_Loading_Popup_Count" class="'+ NetFunnel.TS_LIMIT_TEXT + '"></span></span></b></div> \
						</div>\
						<div style="font-family : Univers LT W04_55 Roman1475960;margin: 4% auto 6%;text-align: center;font-size: 16px;color: #999;">Please note that the waiting time may increase if you revisit this page.</div>\
					</div>\
				</div>\
			</div>'
		}, 'normal');
		
		NetFunnel.SkinUtil.add('nfSkin-eng', {
			htmlStr: '\
			<div id="NetFunnel_Skin_Top" style="display: flex;justify-content: center;align-items: center;overflow-y: hidden;position: fixed;left: 0;top: 0;width:100%;height:100%;color: #000;background-color: #fff;">\
				<div style="overflow-y: auto;width: 100%;height: 100%;">\
					<div style="padding: 0 30px;margin: auto;max-width: 600px;">\
						<div>\
							<img style="display: block;margin: 15% auto 8%;width:212px; height: 70px; border: none;" src="data:image/gif;base64,'+ logoData + '">\
						</div>\
						<div style="font-family : Univers LT W04_55 Roman1475960;text-align: center;font-size: 24px;font-weight: bold;letter-spacing: -1px;">We are currently experiencing a high volume of traffic. Please give us a moment.</div>\
						<div style="margin-top: 10%;padding: 8% 10% 10%;max-height: 160px;box-shadow: 0 0 11px rgba(0, 0, 0, .11);">\
						<div style="text-align: center;">\
							<div style="font-family : Univers LT W04_55 Roman1475960;font-size: 18px;color: #999;">Your estimated wait time : </div>\
							<div id="NetFunnel_Loading_Popup_TimeLeft" class="%Hhour(s) %Mminute(s) %02Ssecond(s)^ ^false^font-size:15px !important;color:#525252;" style="font-family : Univers LT W04_55 Roman1475960;font-weight: 700;font-size: 31px;color: #000;"> 01hour(s) 01minute(s) 13second(s) </div>\
						</div>\
						<div style="margin-top: 30px;width:100%; height: 10px; visibility: visible;" id="NetFunnel_Loading_Popup_Progressbar"></div> \
						</div>\
						<div style="font-family : Univers LT W04_55 Roman1475960;margin: 8% 0 6%;line-height; 2;text-align: center;font-size: 21px;color:#999;">Number of users ahead of you : <b><span style="font-size: 26px;color:#000"><span id="NetFunnel_Loading_Popup_Count" class="'+ NetFunnel.TS_LIMIT_TEXT + '"></span></span></b></div> \
						</div>\
						<div style="font-family : Univers LT W04_55 Roman1475960;margin: 4% auto 6%;text-align: center;font-size: 16px;color: #999;">Please note that the waiting time may increase if you revisit this page.</div>\
					</div>\
				</div>\
			</div>'
		}, 'mobile');
	}
}
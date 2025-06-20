package kr.co.scrab.common;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class CommonUtil {
	private static final Logger logger = LoggerFactory.getLogger(CommonUtil.class);
	
	// 입력 문자열을 SHA-256으로 암호화하여 해시 값을 반환하는 메서드
    public String encrypt(String text) throws NoSuchAlgorithmException {
	    // SHA-256 알고리즘의 인스턴스 생성
        MessageDigest md = MessageDigest.getInstance("SHA-256");         
        // 입력 문자열의 바이트 배열을 업데이트하여 해시 값을 계산
        md.update(text.getBytes()); 
		// 계산된 해시 값을 16진수 문자열로 변환하여 반환
        return bytesToHex(md.digest()); 
    }

    // 바이트 배열을 16진수 문자열로 변환하는 메서드
    private String bytesToHex(byte[] bytes) {
        StringBuilder builder = new StringBuilder();
        for (byte b : bytes) {
        	// 바이트 값을 16진수 문자열로 변환하여 StringBuilder에 추가
            builder.append(String.format("%02x", b)); 
        }
        // StringBuilder의 내용을 문자열로 반환
        return builder.toString(); 
    }
}

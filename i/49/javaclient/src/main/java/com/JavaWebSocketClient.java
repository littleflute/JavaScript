package com;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Iterator;
import java.util.Properties;

import org.java_websocket.WebSocket;
import org.java_websocket.client.WebSocketClient;
import org.java_websocket.handshake.ServerHandshake;

public class JavaWebSocketClient extends WebSocketClient {

	public static Properties properties = null;
	static {
		properties = new Properties();
		try {
			properties.load(JavaWebSocketClient.class.getClassLoader().getResourceAsStream("serverinfo.properties"));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public JavaWebSocketClient(String url) throws URISyntaxException {
		super(new URI(url));
	}

	@Override
	public void onOpen(ServerHandshake shake) {
		System.out.println("ServerHandshake...");
		for (Iterator<String> it = shake.iterateHttpFields(); it.hasNext();) {
			String key = it.next();
			System.out.println(key + ":" + shake.getFieldValue(key));
		}
	}

	@Override
	public void onMessage(String paramString) {
		System.out.println("Received message:" + paramString);
	}

	@Override
	public void onClose(int paramInt, String paramString, boolean paramBoolean) {
		System.out.println("Close...");
	}

	@Override
	public void onError(Exception e) {
		System.out.println("Error:" + e.getMessage());

	}

	public static void main(String[] args) {
		try {
			String serverUrl = properties.getProperty("sever.url");
			JavaWebSocketClient client = new JavaWebSocketClient(serverUrl);
			client.connect();
			while (!client.getReadyState().equals(WebSocket.READYSTATE.OPEN)) {
				Thread.sleep(1000);
				System.out.println("Server is not ready yet!");
			}
			System.out.println("Created WebSocket connection with server.");
			client.send("{\"message\":\"Jeremyjia sent test data\"}");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
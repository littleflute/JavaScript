#include <iostream>
#include <cpprest/ws_client.h>

using namespace std;
using namespace web;
using namespace web::websockets::client;

int main() {
  websocket_client client;
  client.connect("ws://localhost:9090").wait();

  websocket_outgoing_message out_msg;
  //{"method":"connect","clientId":"d560a361-7d08-41da-05c5-cd01b5f089d1"}
  string s = "{";
  s+="\"";
  s+="}";

  out_msg.set_utf8_message(s);
  client.send(out_msg).wait();

  client.receive().then([](websocket_incoming_message in_msg) {
    return in_msg.extract_string();
  }).then([](string body) {
    cout << body << endl; // test
  }).wait();

  client.close().wait();

  return 0;
}
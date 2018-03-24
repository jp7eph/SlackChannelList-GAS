# SlackChannelList-GAS
Slackのチャンネル一覧を取得し，Googleスプレッドシートに書き込む

こんな感じになる
![image](https://user-images.githubusercontent.com/21063579/37860748-86a52a26-2f6f-11e8-81b5-da77ec85db68.png)

# How to use
1. SlackのChannel.list APIを準備する
https://api.slack.com/methods/channels.list/test
1. 適当なGoogleスプレッドシートを作って，見出し行を適当に作る
1. スクリプトエディタにコードをコピペ

# 自動取得化
自動取得するためにはGoogleスクリプトの定期実行タイマーで対応

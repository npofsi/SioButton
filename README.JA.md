# 汐のボタン - 星宮汐のボイスボタン

README: [中文](https://github.com/npofsi/siobutton/blob/master/README.md) | **日本語** | [English](https://github.com/npofsi/siobutton/blob/master/README.EN.md)

> 新しい星宮汐のボイスボタン。星宮汐の総合ファンページを目指します。

ホームページ https://hosimiyas.io

関連リンク:

- [星宮汐の Twitch チャンネル](https://www.twitch.tv/hosimiyasio)

* [星宮汐の Youtube チャンネル](http://bit.ly/38zay0t)

- [星宮汐の Bilibili チャンネル](https://space.bilibili.com/402417817)
- [星宮汐の Twitter](https://twitter.com/Hosimiya_Sio)

## このプロジェクトへの貢献(コントリビュート)

GitHub の開発に直接参加する方法が分からない場合は、素材や意見を直接以下のメールアドレスに送信してください。([npofsi@outlook.com](mailto:voice@fubuki.moe))。またメールの中にタイトル、内容及びあなたの ID（Bilibili、Twitter やその他）を記述してください。そうすることで私達は下のコントリビューターリストにあなたの名前を掲載することができます。

もしくは素材や意見を GitHub の[Issues](https://github.com/npofsi/siobutton/issues) ページに送ることもできます。メールの場合と同じようにタイトルと内容を記述してください。

もし GitHub での開発方法を知っている場合は、プロジェクトをフォークして変更してください。変更が完了したら、プルリクエストしてください。各項目の編集に関しては以下に記述されています。

### 音声の追加または修正

音声データは mp3 のビットレート 128Kbps で統一し、`static/voices/`に保存してください。対応する URL は`/voices/`に入れてください。

すべての音声データのメタデータは`assets/voices.json`に追加または修正をしてください。

音声を変更する場合は変更後に変更前のファイルを削除してください。音声ファイルは，必ず過去を含め現在のファイル名と同じものであってはなりません。

### 翻訳

日本語と英語への翻訳が必要です！

ボタンなどのテキストの翻訳は `assets/locales/` 内に各言語に対応した 3 つの.json ファイルがあります。

音声のタイトルテキストファイルは `aseets/voices.json` 内にあります。

## ローカルでのデプロイ

ローカル開発環境をデプロイする
このサイトは Vue + NuxtJS + Vuetify を使用して開発しています。

ローカル開発環境をデプロイするためには、まず最新版の Node と Yarn をインストールしてください。その後、以下の手順に従ってください。

1.  コードを fork してクローンする。
2.  コードディレクトリに移動し、yarn を実行して依存関係をインストールする。
3.  `yarn dev`を実行し、`localhost:3000`でローカル開発サーバーを起動する。ローカル開発サーバーでは、変更した結果をすぐに反映させることが可能です。
4.  デプロイ用ファイルをコンパイルするためには、`yarn generae`を実行して`dist`ディレクトリを生成してください。このサイトは完全に静的なので、dist ディレクトリ全体を直接デプロイすることができます。

## コントリビューター

開発:

- GitHub [npofsi](https://github.com/npofsi)
- GitHub [hanximeng](https://github.com/hanximeng)

- Github [孤独のイオン](https://github.com/lonelyion)
- Github [Asrui Morus](https://github.com/Morxi)

オーディオクリップ：

- Blog [npofsi](https://blog.npofsi.pro)
- Bilibili [hanximeng](https://space.bilibili.com/28127254)

翻訳：

- Blog [npofsi](https://blog.npofsi.pro)

## LICENCE

プログラム： [MIT License](https://github.com/npofsi/siobutton/blob/master/LICENSE)

## サポート

### BrowserStack

Proudly using BrowserStack.

[![](https://i.loli.net/2017/09/27/59cbc16b0f8b4.png)](https://www.browserstack.com/)

> **BrowserStack** is a cloud-based cross-browser testing tool that enables developers to test their websites across various browsers on different operating systems and mobile devices, without requiring users to install virtual machines, devices or emulators.

### Vercel

Powered by Vercel.

[![vercel.png](https://i.loli.net/2020/07/18/rPah8FVmqBXL6dj.png)](https://www.vercel.com/?utm_source=oruyanke)

> **​Vercel** is a cloud platform for static sites and Serverless Functions that fits perfectly with your workflow. It enables developers to host Jamstack websites and web services that deploy instantly, scale automatically, and requires no supervision, all with no configuration.

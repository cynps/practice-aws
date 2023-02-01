# Lambda CI/CD

## 設計
* Github
* CodePipeline
    * CodeBuild
    * CodeDeploy
* AWS Lambda

## commands
* デプロイパッケージの準備
    * ソースコード作成と zip ファイルの作成
        ```
        $ cd # dir #/lambda-test
        $ mkdir src
        $ cd src
        $ touch index.js
        $ vi index.js ## src ディレクトリ内の index.js 参照
        $ npm i moment --save
        $ cd ../
        $ zip src
        ```
* CodeBuild 側の準備
    * 任意のバケット名で S3 バケットの作成
    * OAuth を利用して GitHub リポジトリと接続
    * リポジトリを指定:
        * https://github.com/cynps/practice-aws.git
    * ソースバージョン: 
        * ブランチ名: main
    * ビルド仕様: buildspec ファイルを使用する
        * Buildspec 名: buildspec.yml

## 参考
* CodeBuild
    * https://aws.amazon.com/jp/codebuild/


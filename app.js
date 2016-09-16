/** Node.js ではモジュールという仕組みを使っているため、HTML に組み込む JavaScript を書いていたときのように、 匿名関数で囲う必要はありません。
 * http://www.nnn.ed.nico/contents/guides/97
 * */

'use strict;'
const number = process.argv[2] || 0;
    // 0 や null や undefined などの Falsy な値である場合、number には 0 が代入
    //0 番には node コマンドのファイルのパスが入り、1 番には、実行しているプログラムのファイルのパスが入る
var sum = 0;
for (var i = 1; i <= number; i++){
    sum = sum + 1;
}
console.log(sum);
/**
https://github.com/ にアクセスし、「 New repository 」をクリックします
my-first-node-js という名前で「 Create repository 」をクリックします

echo "# my-first-node-js" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/bamb00h/my-first-node-js.git
git push -u origin master
username password の入力

 */
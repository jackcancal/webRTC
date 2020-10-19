export function downLoad(url) {
  const oA = document.createElement("a");
  oA.download = 'photo';// 设置下载的文件名，默认是'下载'
  oA.href = url;
  document.body.appendChild(oA);
  oA.click();
  oA.remove(); // 下载之后把创建的元素删除
}

'use strict';

var collection = loadAllItems();

function getName(barcode) {
  for (var i in collection) {
    if (collection[i].barcode == barcode) {

      return collection[i].name;
    }
  }
}

function getUnit(barcode) {
  for (var i in collection) {
    if (collection[i].barcode == barcode) {
      return collection[i].unit;
    }
  }
}

function getPrice(barcode) {
  for (var i in collection) {
    if (collection[i].barcode == barcode) {
      return collection[i].price;
    }
  }
}

function getAmount(inputs) {
  var GoodsList = [];
  for (var i in collection) {
    var cnt = 0;
    for (var j in inputs) {
      if (collection[i].barcode == inputs[j]) {
        cnt++;
      }

    }
    GoodsList.push({
      barcode: collection[i].barcode,
      count: cnt
    })
  }

  return GoodsList;
}

function getTotalPrice(inputs) {
  var list = getAmount(inputs);
  let cnt = 0;
  for (var i in list) {

    cnt += getPrice(list[i].barcode) * list[i].count;

  }
  console.log(cnt);
  return cnt;

}

function printReceipt(inputs) {

  var GoodsList = getAmount(inputs);

  var str = '***<没钱赚商店>收据***\n';
  for (var i in GoodsList) {
    if (GoodsList[i].count > 0) {
      str += '名称：' + getName(GoodsList[i].barcode) + '，数量：' + GoodsList[i].count + getUnit(GoodsList[i].barcode) + '，单价：' + (getPrice(GoodsList[i].barcode)).toFixed(2) +
        '(元)，小计：' + (getPrice(GoodsList[i].barcode) * GoodsList[i].count).toFixed(2) + "(元)\n";
    }
  }
  str += '----------------------\n';
  str += '总计：' + (getTotalPrice(inputs)).toFixed(2) + '(元)\n';
  str += '**********************';

  console.log(str);

}
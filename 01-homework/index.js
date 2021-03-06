const PRODUCT_1 = 15.678;
const PRODUCT_2 = 123.965;
const PRODUCT_3 = 90.2345;
const CUSTOMER_MONEY = 500;

const productsPrices = [PRODUCT_1, PRODUCT_2, PRODUCT_3];

const maxPrice = Math.max(...productsPrices);
const minPrice = Math.min(...productsPrices);

const totalAmount = productsPrices.reduce((accumulator, currentValue) => accumulator + currentValue);

const productsPricesRounded = productsPrices.map(price => Math.floor(price));

const totalAmountRoundedPrices = productsPricesRounded.reduce((accumulator, currentValue) => accumulator + currentValue);

const roundHundredBigger = Math.ceil(totalAmountRoundedPrices / 100) * 100;

const roundHundredLower = Math.floor(totalAmountRoundedPrices / 100) * 100;
const roundHundredLowerIsEven = roundHundredLower % 2 === 0 ? true : false;

const purchaseChange = CUSTOMER_MONEY - totalAmount;

const averagePrice = totalAmount / productsPrices.length;
const averagePriceTwoDecimal = Math.round(averagePrice * 100) / 100;

const randomDiscount = Math.round(Math.random() * 100);

const amountToPay = totalAmount - (totalAmount * randomDiscount / 100);
const amountToPayTwoDecimal = Math.round(amountToPay * 100) / 100;

const costOfGoods = Math.floor(totalAmount) / 2;

const netSalesRevenue = Math.round((costOfGoods - (totalAmount * randomDiscount / 100)) * 100) / 100;

const results = `Максимальна ціна: ${maxPrice}
Мінімальна ціна: ${minPrice}
Вартість всіх товарів: ${totalAmount}
Вартість всіх товарів (ціна товарів без копійок): ${totalAmountRoundedPrices}
Сума товарів округлена до сотень: ${roundHundredBigger}
Сума всіх товарів (округлена в меншу сторону) парне число?: ${roundHundredLowerIsEven ? 'Так' : 'Ні'}
Сума решти, при оплаті всіх товарів (без округлення): ${purchaseChange}
Cереднє значення цін, округлене до другого знаку після коми: ${averagePriceTwoDecimal}
Випадкова знижка: ${randomDiscount}%
Сума до оплати округлену до 2 знаків після коми: ${amountToPayTwoDecimal}
Cобівартість товарів:  ${costOfGoods}
Чистий прибуток:  ${netSalesRevenue}`;

console.log(results);
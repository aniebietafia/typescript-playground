// Generics
const phoneList = [
  { customerId: "001", areaCode: "321", num: "123-4566" },
  { customerId: "002", areaCode: "174", num: "142-3626" },
  { customerId: "003", areaCode: "192", num: "012-7190" },
  { customerId: "005", areaCode: "402", num: "652-5782" },
  { customerId: "004", areaCode: "301", num: "184-8501" },
];

const phoneDict = {
  "001": {
    customerId: "001",
    areaCode: "321",
    num: "123-4566",
  },
  "002": {
    customerId: "002",
    areaCode: "174",
    num: "142-3626",
  },
};

interface PhoneInfo {
  customerId: string;
  areaCode: string;
  num: string;
}

function listToDict(
  list: PhoneInfo[],
  idGen: (arg: PhoneInfo) => string
): {
  [k: string]: PhoneInfo;
} {
  const dict: { [k: string]: PhoneInfo } = {};
  list.forEach((element) => {
    const dictKey = idGen(element);
    dict[dictKey] = element;
  });

  return dict;
}

const result = listToDict(phoneList, (item) => item.customerId);

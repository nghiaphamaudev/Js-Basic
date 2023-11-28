'use strict';

const Nghia = {
  fullName: 'Phạm Văn Nghĩa',
  birthYear: 2002,
  favorite: 'watch video nude',
};

const nghiaNew = { ...Nghia, career: 'none' };
// console.log(nghiaNew);

const nghiaOld = {
  ...Nghia,
  ...nghiaNew,
};
console.log(nghiaOld);
//giá trị sau ghi đè lên giá trị trc đó

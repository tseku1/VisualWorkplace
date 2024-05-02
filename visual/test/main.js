

// const { start } = require("init");

// // 6-12 35min 6tsag odort
// function findNewStudentInterest() {
//     let startDate = new Date('2018-09-01');
//     let endDate = new Date('2022-06-01');
//     let curse = 1;
//     let niitSurahTsag = 0;
//     let totalWeek = 0;
//     let niitAjillahDolooHonog = 32;
//     let ajillahTsag = 1280;
//     let surahTsag = 22.5;
//     console.log(startDate.toDateString());
//     console.log(endDate.getDay());


//     while (startDate <= endDate) {
    
//         if (startDate.getMonth() === 5) {
//             console.log("zun bolloo");
//             // Skip summer months by adding three months (going to September 1st)
//             startDate.setMonth(startDate.getMonth() + 3);
//             curse += 1;
//             continue;
//         }

//         let heddehOdor = startDate.getDay() + 1;
//         var futureDate = new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000);

//         // Дутуу Долоо хоногийг орхино
//         if(startDate.getDay !== 1){
//             if(startDate.getDay === 0){
//                 startDate.setDate(startDate.getDate() + 1);
//             }else{
//                 startDate.setDate(startDate.getDate() + (8 - startDate.getDay()));
//             }
//         }

//         //niit suraltsah hugatsaa
//         if (futureDate <= endDate) {
//             if(heddehOdor !== 5 && heddehOdor !== 6){
//                 totalWeek += 1
//                 console.log("ih surguuli: ", startDate);
//                 // niitSurahTsag += 90*3*5/60;
//             }
//             console.log(totalWeek)
//             // console.log(niitSurahTsag);
//         }
//             // Increment the currentDate by one day for the next iteration
//         startDate = futureDate
//     }
//     // console.log(niitSurahTsag)
//     console.log("ajliin hajuugaar suraltsah tsag tsag:",(totalWeek-niitAjillahDolooHonog) * surahTsag)
//     console.log("niit surah tsag:",totalWeek * surahTsag)
//     console.log("precent:", totalWeek * surahTsag*100/ajillahTsag,"%")
// }

// findNewStudentInterest();

function tableCreate() {
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < 3; i++) {
      var tr = document.createElement('tr');
      for (var j = 0; j < 2; j++) {
        if (i == 2 && j == 1) {
          break
        } else {
          var td = document.createElement('td');
          td.appendChild(document.createTextNode('\u0020'))
          i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
          tr.appendChild(td)
        }
      }
      tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
  }
  tableCreate();
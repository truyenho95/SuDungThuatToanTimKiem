let phoneNumberListBefore = ["0914162689", "01669788679", "0978178764", "0979809204", "0905682529", "0982725726", "0937303282", "0974131489", "0984084034", "0977557349", "01649616718", "01272389777", "0986958908", "01648129157", "01673433886", "0988753023", "01656077115", "0972907579", "0904054732", "01658102387", "01666240750", "0983043195", "0976388281", "01656077128", "0976096113", "0912992158", "0979389891", "0979680065", "0976764388", "01653344585", "0975808375", "01697565952", "0918612410", "0914421796", "0976054844", "0986109656", "01643845060", "01674518996", "0975861551", "0936053286", "0974131489", "0974808483", "0985988018", "0977022810", "01698203985", "01674519611", "0905516826", "01649615261", "0979006323", "0978140196", "0979879310", "0989352144", "01274543993", "0976734967", "0986728217", "0977311312", "01292042096", "0984200935", "0977652886", "0942116052", "0986561497", "0972544485", "0975296509", "0974552551", "01686979170", "01686915981", "0904690835", "0979650651", "0985587050", "0987626642", "01248415126", "01674238245", "0975236626", "01253212277", "0983535586", "0904567146", "0976739552", "0983412681"];

const regex016 = /^016/gm;
const regex012 = /^012/gm;
const viettelRegex = /^(096)|^(097)|^(098)|^(03)/gm;
let phoneNumberListAfter = [];
let viettelPhoneNumber = [];

phoneNumberListBefore.forEach(item => {
  if (regex016.test(item))
    phoneNumberListAfter.push(item.replace(regex016,'03'));
  else if (regex012.test(item))
    phoneNumberListAfter.push(item.replace(regex012,'08'));
  else
    phoneNumberListAfter.push(item);
});

phoneNumberListAfter.forEach(item => {
  if (viettelRegex.test(item))
    viettelPhoneNumber.push(item);
})

document.write('<h4>Danh sách số điện thoại sau chuyển đổi đầu số:</h4>');
phoneNumberListBefore.forEach(item => {
  document.write(`${item}, `);
})

document.write('<h4>Danh sách số điện thoại sau chuyển đổi đầu số:</h4>');
phoneNumberListAfter.forEach(item => {
  document.write(`${item}, `);
})

document.write('<h4>Số Viettel:</h4>');
viettelPhoneNumber.forEach(item => {
  document.write(`${item}, `);
})
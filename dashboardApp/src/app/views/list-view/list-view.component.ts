import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  panelOpenState = false;

  items = [
    {
      "_id": "5fa65676464d6154b368313a",
      "name": {
        "first": "Washington",
        "last": "Casey"
      },
      "company": "UNDERTAP",
      "about": "Quis ex deserunt id cillum laboris adipisicing nulla in sit deserunt. Culpa exercitation ullamco commodo Lorem eu anim laborum adipisicing cupidatat minim deserunt veniam. Est cillum esse ea occaecat. Amet minim commodo nisi nostrud ad proident officia sint cupidatat duis. Fugiat cupidatat dolor nulla veniam pariatur sit exercitation minim id nostrud minim. Dolore est enim nulla elit. Sit voluptate duis aliqua ullamco occaecat fugiat labore aliqua enim.",
      "greeting": "Hello, Washington! You have 10 unread messages."
    },
    {
      "_id": "5fa65676e7e3739c7771f789",
      "name": {
        "first": "Selma",
        "last": "Ballard"
      },
      "company": "CYCLONICA",
      "about": "Adipisicing commodo nulla ullamco irure non cupidatat culpa non anim. Id ullamco qui aliquip irure est excepteur adipisicing. Est irure nulla exercitation sint officia.",
      "greeting": "Hello, Selma! You have 5 unread messages."
    },
    {
      "_id": "5fa65676b51231d74a20ee39",
      "name": {
        "first": "Meyers",
        "last": "Randolph"
      },
      "company": "CANOPOLY",
      "about": "Irure minim sunt occaecat magna exercitation cillum fugiat tempor eu exercitation proident anim dolore. Do quis nisi sunt dolor non anim incididunt aliquip anim incididunt consectetur quis. Aute consectetur non deserunt eiusmod deserunt officia. Minim velit labore nulla et aliquip ea ea Lorem est irure. Est sit laborum aliqua dolor exercitation.",
      "greeting": "Hello, Meyers! You have 7 unread messages."
    },
    {
      "_id": "5fa65676b25a8ccb37416c28",
      "name": {
        "first": "Lynn",
        "last": "Hanson"
      },
      "company": "ACCEL",
      "about": "Exercitation laboris ut tempor ipsum cillum incididunt. Anim ea irure amet Lorem do commodo. Ipsum veniam ad id incididunt ut magna anim ut ullamco ullamco aute est laboris. Magna labore consectetur ullamco mollit laborum sit quis sint.",
      "greeting": "Hello, Lynn! You have 8 unread messages."
    },
    {
      "_id": "5fa656768f1929cfcd901f72",
      "name": {
        "first": "Aileen",
        "last": "Morrow"
      },
      "company": "LYRICHORD",
      "about": "Excepteur minim nostrud irure labore cupidatat magna cupidatat anim qui amet. Aliquip deserunt excepteur elit sunt. Dolor aute non ipsum duis occaecat aliquip. Commodo consectetur culpa ut dolor sint eiusmod.",
      "greeting": "Hello, Aileen! You have 9 unread messages."
    },
    {
      "_id": "5fa6567653cdf45fa4601c64",
      "name": {
        "first": "Valeria",
        "last": "Sanford"
      },
      "company": "EXTREMO",
      "about": "Minim elit consequat commodo qui non non quis ex ea laboris mollit dolor ad cillum. Irure deserunt exercitation ipsum cillum irure. Velit commodo ad duis sunt eu eu. Amet aute officia amet ut deserunt.",
      "greeting": "Hello, Valeria! You have 9 unread messages."
    },
    {
      "_id": "5fa65676fa736e8fd1ced1a4",
      "name": {
        "first": "Mcmahon",
        "last": "Schwartz"
      },
      "company": "GEOFARM",
      "about": "Cupidatat et proident duis magna quis nisi. Anim aliqua adipisicing labore Lorem deserunt nisi tempor nostrud ea dolore enim ea. Proident non eu anim nulla ut amet Lorem sunt ipsum ex esse est esse.",
      "greeting": "Hello, Mcmahon! You have 5 unread messages."
    },
    {
      "_id": "5fa656761c1feee4a2aff64f",
      "name": {
        "first": "Owens",
        "last": "Greene"
      },
      "company": "NORALEX",
      "about": "Consectetur sit proident commodo amet minim reprehenderit non sit ut deserunt reprehenderit et. Velit incididunt labore ad velit Lorem mollit mollit qui cupidatat occaecat officia aliqua. Anim sint aliqua ad sint ad consequat anim exercitation ullamco elit tempor sunt. Deserunt proident enim velit cupidatat nisi. In laborum deserunt in aute deserunt pariatur eiusmod fugiat amet laboris enim adipisicing eu. Tempor officia aliqua consectetur magna excepteur proident mollit esse irure reprehenderit.",
      "greeting": "Hello, Owens! You have 8 unread messages."
    },
    {
      "_id": "5fa65676781a110e9c2b8ed2",
      "name": {
        "first": "Pacheco",
        "last": "Cook"
      },
      "company": "NAXDIS",
      "about": "Nostrud minim sunt elit incididunt. Dolore excepteur Lorem anim mollit amet cupidatat nisi nostrud incididunt nulla et laboris mollit. Sunt enim voluptate non laborum cillum ut amet id veniam laboris.",
      "greeting": "Hello, Pacheco! You have 10 unread messages."
    },
    {
      "_id": "5fa65676f116560a332e79bf",
      "name": {
        "first": "Belinda",
        "last": "Finley"
      },
      "company": "ISOLOGIA",
      "about": "Cillum veniam et ad est in esse sint veniam dolor nostrud incididunt cupidatat. Et est amet veniam et aliqua laboris in dolore eiusmod excepteur qui ipsum reprehenderit id. Fugiat dolore consequat nisi ad esse aliquip nostrud aute nostrud qui. Consectetur dolore elit occaecat culpa et incididunt ut dolor exercitation commodo.",
      "greeting": "Hello, Belinda! You have 10 unread messages."
    },
    {
      "_id": "5fa65676c5edd8ef6c4809ab",
      "name": {
        "first": "Keith",
        "last": "Young"
      },
      "company": "QOT",
      "about": "Esse incididunt ipsum tempor minim fugiat officia. Ex id consequat ut tempor excepteur Lorem exercitation. Esse elit ut officia velit voluptate enim occaecat deserunt excepteur duis esse cupidatat eiusmod officia. Esse tempor magna occaecat magna est culpa est culpa.",
      "greeting": "Hello, Keith! You have 7 unread messages."
    },
    {
      "_id": "5fa65676091804ab71aa2b82",
      "name": {
        "first": "Dalton",
        "last": "Hatfield"
      },
      "company": "BOLAX",
      "about": "Exercitation ipsum Lorem excepteur ex amet pariatur esse esse velit. Sit anim anim ullamco sint adipisicing dolor tempor. Commodo dolor sit deserunt officia magna velit deserunt culpa duis voluptate labore officia commodo.",
      "greeting": "Hello, Dalton! You have 5 unread messages."
    },
    {
      "_id": "5fa65676aea4712186b8af62",
      "name": {
        "first": "Lambert",
        "last": "Roth"
      },
      "company": "MEGALL",
      "about": "Adipisicing labore qui duis cupidatat laboris ullamco velit irure cillum. Nulla pariatur esse do ipsum cillum aute est et ad labore ex do laboris. Aliquip consequat est officia aute veniam consequat. Voluptate cupidatat ea cupidatat aliqua elit nulla officia dolore nostrud cillum reprehenderit officia.",
      "greeting": "Hello, Lambert! You have 8 unread messages."
    },
    {
      "_id": "5fa656762f6839cec09df981",
      "name": {
        "first": "Adela",
        "last": "Cooley"
      },
      "company": "TETRATREX",
      "about": "Duis ullamco occaecat fugiat enim sunt ut mollit minim. Anim ullamco consectetur id veniam reprehenderit non ea excepteur laborum esse nisi veniam deserunt. Irure esse velit consectetur aliquip excepteur mollit.",
      "greeting": "Hello, Adela! You have 5 unread messages."
    },
    {
      "_id": "5fa65676398aa7ab16cb7547",
      "name": {
        "first": "Burke",
        "last": "Travis"
      },
      "company": "TERRAGO",
      "about": "Est quis duis incididunt nulla. Ullamco esse aliquip sint in duis adipisicing nostrud esse enim. Incididunt ut esse et duis cupidatat non. Reprehenderit et cupidatat occaecat nulla. Labore quis in et ut sint eiusmod labore sit dolore ut laborum. Consequat ea aliquip cillum eu veniam exercitation Lorem aliquip quis magna amet ullamco eu.",
      "greeting": "Hello, Burke! You have 10 unread messages."
    },
    {
      "_id": "5fa65676611db0ab0d67a300",
      "name": {
        "first": "Sharpe",
        "last": "Allen"
      },
      "company": "REALMO",
      "about": "Cillum dolor excepteur culpa occaecat laborum ut aliqua ad velit. Esse enim et cupidatat quis nulla anim ad cupidatat proident tempor aliquip et. Consectetur mollit sunt sit deserunt mollit ex ea excepteur irure. Culpa ullamco voluptate nostrud magna quis culpa cillum eu est Lorem nulla sit. Eiusmod id pariatur consequat amet laboris consectetur ullamco adipisicing est reprehenderit tempor amet eiusmod. Quis tempor amet esse nostrud.",
      "greeting": "Hello, Sharpe! You have 5 unread messages."
    },
    {
      "_id": "5fa6567613cb3304d1d020aa",
      "name": {
        "first": "Elvia",
        "last": "Mcintyre"
      },
      "company": "LIQUIDOC",
      "about": "Tempor do adipisicing Lorem duis commodo nulla id eu. Qui laborum proident eu officia dolore ullamco laboris. Laboris irure mollit occaecat dolore cupidatat ullamco voluptate magna laboris occaecat. Nulla duis labore ullamco minim magna minim anim eu ut officia consectetur minim fugiat. Veniam enim Lorem nostrud ad laborum non cillum magna fugiat magna cupidatat. Elit ex commodo ea incididunt velit ad. Eiusmod et laborum id eiusmod veniam duis incididunt ullamco.",
      "greeting": "Hello, Elvia! You have 5 unread messages."
    },
    {
      "_id": "5fa65676b80899290eca2a8d",
      "name": {
        "first": "Concepcion",
        "last": "Mcneil"
      },
      "company": "ROCKABYE",
      "about": "Enim esse laborum tempor consectetur elit aute. Reprehenderit cupidatat est cupidatat mollit et laboris dolore sunt minim ea do. Incididunt quis exercitation commodo reprehenderit laborum magna. Minim veniam duis cupidatat non in ullamco. Aute excepteur consequat cupidatat voluptate nostrud aliquip consectetur enim laborum ut nulla quis veniam incididunt. Laborum culpa aliquip laboris exercitation nostrud nisi id. Id et dolore excepteur incididunt consequat culpa ea aliqua aute veniam qui.",
      "greeting": "Hello, Concepcion! You have 9 unread messages."
    },
    {
      "_id": "5fa65676aaba81fa8a7554d0",
      "name": {
        "first": "Alford",
        "last": "Spears"
      },
      "company": "EWEVILLE",
      "about": "Cupidatat voluptate ipsum consequat ipsum do exercitation culpa. Qui velit in nulla exercitation minim excepteur excepteur. Sit consectetur deserunt ex fugiat ad pariatur consequat nisi. Id ad non magna quis qui. Laboris proident labore officia eiusmod laboris dolor do.",
      "greeting": "Hello, Alford! You have 6 unread messages."
    },
    {
      "_id": "5fa65676b6a12fd16a82e6d7",
      "name": {
        "first": "Joyce",
        "last": "Lamb"
      },
      "company": "TRI@TRIBALOG",
      "about": "Dolor in aute officia est dolor adipisicing veniam anim et. Aliqua duis sint deserunt proident incididunt cupidatat excepteur et ex. Ullamco voluptate labore cillum nisi in minim eiusmod adipisicing aute qui velit sit. Nostrud minim excepteur ex esse excepteur. Minim reprehenderit laborum proident consequat voluptate laborum esse proident ea aute pariatur.",
      "greeting": "Hello, Joyce! You have 5 unread messages."
    },
    {
      "_id": "5fa65676e42b693fae5356fd",
      "name": {
        "first": "Cindy",
        "last": "Barber"
      },
      "company": "FURNIGEER",
      "about": "Ullamco aliquip occaecat ex do sint ea ullamco ad commodo reprehenderit. Occaecat velit in incididunt laborum incididunt qui commodo ipsum sint pariatur ea nisi commodo culpa. Et ullamco Lorem eiusmod ullamco. Id aliquip veniam dolor commodo qui.",
      "greeting": "Hello, Cindy! You have 9 unread messages."
    },
    {
      "_id": "5fa65676a1ef8d4a2bb619e1",
      "name": {
        "first": "Beverly",
        "last": "Pruitt"
      },
      "company": "MARVANE",
      "about": "Nostrud aute exercitation nulla mollit. Non anim officia aute eiusmod duis eu culpa. Sint nisi et sit deserunt cillum voluptate.",
      "greeting": "Hello, Beverly! You have 6 unread messages."
    },
    {
      "_id": "5fa65676afdd0fec1be4e089",
      "name": {
        "first": "Alice",
        "last": "Wilkins"
      },
      "company": "QUAILCOM",
      "about": "Ex anim sint excepteur labore ad laborum nulla tempor sunt. Eu sit laboris officia ut reprehenderit culpa laboris consectetur. Labore eu duis irure irure aute culpa. Commodo fugiat elit consectetur sint cupidatat exercitation dolor aute laborum eu tempor nulla pariatur. Eiusmod ex cupidatat consectetur officia eiusmod consequat magna laborum reprehenderit ea anim aute magna in. Duis aute velit pariatur incididunt sint incididunt voluptate voluptate ipsum. Amet adipisicing ea incididunt voluptate velit commodo esse ad est mollit excepteur mollit ad.",
      "greeting": "Hello, Alice! You have 5 unread messages."
    }
  ]

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goback() {
    this.location.back();
  }

}

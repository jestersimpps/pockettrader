importScripts('workbox-v3.4.1/workbox-sw.js')

self.workbox.skipWaiting();
self.workbox.clientsClaim();

/*
  This is our code to handle push events.
*/
self.addEventListener('push', (event) => {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Push Notification';
  const options = {
    body: `${event.data.text()}`,
    icon: 'images/pt.png',
    badge: 'images/badge.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.workbox.precaching.precacheAndRoute([
  {
    "url": "assets/axios.min.js",
    "revision": "fc5ab06feef9eeba24c6f19e558e79f5"
  },
  {
    "url": "assets/d3.min.js",
    "revision": "6422cecb9407dae02ca533c0d873633c"
  },
  {
    "url": "assets/hashid.min.js",
    "revision": "1e69d2f191b047d69a0d7bd900bcbbb3"
  },
  {
    "url": "assets/icon/$pac.svg",
    "revision": "6896d8b405f9c6eb569b86c8d879e536"
  },
  {
    "url": "assets/icon/abt.svg",
    "revision": "8371b52563a6bf81ab64cbb25ba38ba9"
  },
  {
    "url": "assets/icon/act.svg",
    "revision": "6624f77667135251ff0f7688ed73266f"
  },
  {
    "url": "assets/icon/ada.svg",
    "revision": "117c16963f6242d90b5259756a2fae63"
  },
  {
    "url": "assets/icon/adx.svg",
    "revision": "a4d6d23e50564fd34d838d1ff2c6e2c4"
  },
  {
    "url": "assets/icon/ae.svg",
    "revision": "7f5a865d2752c7aa8a16459eafc4880c"
  },
  {
    "url": "assets/icon/agi.svg",
    "revision": "ae90639bc45bed373e47751023a5d1f3"
  },
  {
    "url": "assets/icon/agrs.svg",
    "revision": "dc6dc7e68e945f00f197bf5802002a71"
  },
  {
    "url": "assets/icon/aion.svg",
    "revision": "7e52a96e14efe7bdcebfe5479d6f5c09"
  },
  {
    "url": "assets/icon/amb.svg",
    "revision": "6ed5674b9dfe31e7a1d4685887b2537e"
  },
  {
    "url": "assets/icon/amp.svg",
    "revision": "8c6ea63b04b15fc7510492f7ee03d5b0"
  },
  {
    "url": "assets/icon/ant.svg",
    "revision": "6f1f622d3f78b6104bdd6b336bc2081c"
  },
  {
    "url": "assets/icon/apex.svg",
    "revision": "39c6ad349a2d69d36b19a94beb5da086"
  },
  {
    "url": "assets/icon/appc.svg",
    "revision": "ffdc3e1e35d19fead3db4e7687d8fb5c"
  },
  {
    "url": "assets/icon/ardr.svg",
    "revision": "5d50b6f98e64aa71d48c2f9d586c1681"
  },
  {
    "url": "assets/icon/ark.svg",
    "revision": "21a9f1fd96fa398c7b408561e31a7584"
  },
  {
    "url": "assets/icon/arn.svg",
    "revision": "38611058d2ac4adae4db840b25caad48"
  },
  {
    "url": "assets/icon/ary.svg",
    "revision": "5664e639bdd7d468abd283342903c443"
  },
  {
    "url": "assets/icon/ast.svg",
    "revision": "cb87f59ea4c47fb5242fa12558c22b3b"
  },
  {
    "url": "assets/icon/atm.svg",
    "revision": "9dde29a1b807ef8cc72d4fe8f5be6f6c"
  },
  {
    "url": "assets/icon/auto.svg",
    "revision": "84dc436cff1408e39be82c36ee249297"
  },
  {
    "url": "assets/icon/bat.svg",
    "revision": "9efdc18679c4fe72525e74fa9bbe9ad1"
  },
  {
    "url": "assets/icon/bay.svg",
    "revision": "5fa2376fe46b4caf63c9c549516e3aff"
  },
  {
    "url": "assets/icon/bcc.svg",
    "revision": "f64f1380a45002b1b209b9999b34916b"
  },
  {
    "url": "assets/icon/bcd.svg",
    "revision": "ac450a46586be825c659592844216678"
  },
  {
    "url": "assets/icon/bch.svg",
    "revision": "33db57c8bf06baf14bc0dae965260422"
  },
  {
    "url": "assets/icon/bcn.svg",
    "revision": "8573365159690a01e35a090ae28acb92"
  },
  {
    "url": "assets/icon/bco.svg",
    "revision": "2eb9c00f937b36dccfcfb323a249c0ea"
  },
  {
    "url": "assets/icon/bcpt.svg",
    "revision": "8da9f3fe01446717cf74eb469f50e641"
  },
  {
    "url": "assets/icon/bdl.svg",
    "revision": "796187be52274bb44af7a453493524b6"
  },
  {
    "url": "assets/icon/bela.svg",
    "revision": "c6a120b2bf28f81f3fbaed7135981659"
  },
  {
    "url": "assets/icon/bix.svg",
    "revision": "cdb6897455b3f17ec6f46310ea1b0097"
  },
  {
    "url": "assets/icon/blcn.svg",
    "revision": "046b311f215aa7ea3478650e72fcf19a"
  },
  {
    "url": "assets/icon/blk.svg",
    "revision": "75860276104603f7b9d3d81d7abc90b2"
  },
  {
    "url": "assets/icon/block.svg",
    "revision": "9319cf4ce3bfc2a06aad60c627145a3c"
  },
  {
    "url": "assets/icon/blz.svg",
    "revision": "43e3c24af15f7a157e967f17290ed1fe"
  },
  {
    "url": "assets/icon/bnb.svg",
    "revision": "841f7fcae0e45e47984b9e02de8f59e3"
  },
  {
    "url": "assets/icon/bnt.svg",
    "revision": "27bd62e6784b88227af71a2c1df81c54"
  },
  {
    "url": "assets/icon/bnty.svg",
    "revision": "102f412fbee7cb345a3dfd3bdda9929f"
  },
  {
    "url": "assets/icon/bos.svg",
    "revision": "4c999c2de244c13d38f515baedc68a95"
  },
  {
    "url": "assets/icon/bpt.svg",
    "revision": "31d0975b8012f2248795230859a1e0a0"
  },
  {
    "url": "assets/icon/bq.svg",
    "revision": "40bf78df7f7fd93e8d2cfd8d020fb321"
  },
  {
    "url": "assets/icon/brd.svg",
    "revision": "1a769c67b74db3e8b52a3a08a3b6e255"
  },
  {
    "url": "assets/icon/btc.svg",
    "revision": "82bf4683f79ff738e9224b003432f9c9"
  },
  {
    "url": "assets/icon/btcd.svg",
    "revision": "e1b3c61b529c86f1d0c4080683fb0700"
  },
  {
    "url": "assets/icon/btcp.svg",
    "revision": "22804e47b0eae690ccd136809a166119"
  },
  {
    "url": "assets/icon/btcz.svg",
    "revision": "9b317e8b5debc99b85912c157fb70246"
  },
  {
    "url": "assets/icon/btg.svg",
    "revision": "e419695410b3d1ff04a622841515e9c7"
  },
  {
    "url": "assets/icon/btm.svg",
    "revision": "679e1b2fa9990e636ab43c77bb81a34a"
  },
  {
    "url": "assets/icon/bts.svg",
    "revision": "f53d29952530f1d21874bd265cb793b7"
  },
  {
    "url": "assets/icon/btx.svg",
    "revision": "6287a5490b277c4d00fd1f666904ce43"
  },
  {
    "url": "assets/icon/burst.svg",
    "revision": "ac49dcb8105982962dfdbe37df89c841"
  },
  {
    "url": "assets/icon/cdn.svg",
    "revision": "f9c28f350adecba4c4f4b584c8b9b375"
  },
  {
    "url": "assets/icon/cdt.svg",
    "revision": "968f02c0e04fcf93fbf28b0351d0f608"
  },
  {
    "url": "assets/icon/cenz.svg",
    "revision": "b465e2f8392a62a829c3ffea3538b47f"
  },
  {
    "url": "assets/icon/chat.svg",
    "revision": "8e01a69572e4796a0cc97f396fcfe9ee"
  },
  {
    "url": "assets/icon/chips.svg",
    "revision": "7a56e5145910a3464b2a1ec94b626142"
  },
  {
    "url": "assets/icon/cix.svg",
    "revision": "08a03f90894f052964411b26ffb70bf9"
  },
  {
    "url": "assets/icon/clam.svg",
    "revision": "5e825b10ab78c672887a710a3ee9c967"
  },
  {
    "url": "assets/icon/cloak.svg",
    "revision": "ca6171d15f63c733e11b9131063369b0"
  },
  {
    "url": "assets/icon/cmt.svg",
    "revision": "9a2e73ce9da4202bded31c0cde43bd19"
  },
  {
    "url": "assets/icon/cnd.svg",
    "revision": "412a558279dd74fb3c7fda19d1c3223d"
  },
  {
    "url": "assets/icon/cnx.svg",
    "revision": "e312fd893abf592533a83ad59fb5e2ff"
  },
  {
    "url": "assets/icon/cny.svg",
    "revision": "7b786254199a7e2093fc89b726b2a278"
  },
  {
    "url": "assets/icon/cob.svg",
    "revision": "2ca6320e4c42e221217984a73de11a8d"
  },
  {
    "url": "assets/icon/coqui.svg",
    "revision": "0c86bb29d8c35a5d0e4d313bdb9bbf92"
  },
  {
    "url": "assets/icon/cred.svg",
    "revision": "d7f036d86eaa2cf40f1477b560744360"
  },
  {
    "url": "assets/icon/crpt.svg",
    "revision": "ba7ee94be4572d1b6021e2a987dd8a8b"
  },
  {
    "url": "assets/icon/crw.svg",
    "revision": "b07f5564e09ab925113378dfd240fef6"
  },
  {
    "url": "assets/icon/cs.svg",
    "revision": "fc6e5ba196bd82604efa3cda3350c230"
  },
  {
    "url": "assets/icon/ctr.svg",
    "revision": "d44d96e4f83c0af999d3d04ba4c81280"
  },
  {
    "url": "assets/icon/cvc.svg",
    "revision": "8596aea6e0ee3bca95471598a22bdee5"
  },
  {
    "url": "assets/icon/dash.svg",
    "revision": "6589aac30dd44f665f230633633a4136"
  },
  {
    "url": "assets/icon/dat.svg",
    "revision": "ab4bb9183d98fde7aa6ab99f5d2d9f95"
  },
  {
    "url": "assets/icon/data.svg",
    "revision": "53959afd8952df99007d3bed6d8eea4c"
  },
  {
    "url": "assets/icon/dbc.svg",
    "revision": "9be31e0ceba83a4dbfa7a4a6534d8272"
  },
  {
    "url": "assets/icon/dcn.svg",
    "revision": "0698ffb1a3f7359557ab8c87d7c5fb49"
  },
  {
    "url": "assets/icon/dcr.svg",
    "revision": "18b9f51d49dce964bb4fbe0a2f372e96"
  },
  {
    "url": "assets/icon/deez.svg",
    "revision": "a3d61eb55691317a398686674be68715"
  },
  {
    "url": "assets/icon/dent.svg",
    "revision": "9e349c2e3ac61b5896480bb266b856cc"
  },
  {
    "url": "assets/icon/dew.svg",
    "revision": "8591617b2376c602a390ebdc394e37ed"
  },
  {
    "url": "assets/icon/dgb.svg",
    "revision": "95af4e6a894abafe429d86bb7f115896"
  },
  {
    "url": "assets/icon/dgd.svg",
    "revision": "2345a0af41bb8890be59ffb29974da32"
  },
  {
    "url": "assets/icon/dlt.svg",
    "revision": "ab23d1958a02ad8ca05f573178a94ef1"
  },
  {
    "url": "assets/icon/dnt.svg",
    "revision": "c5b151395a937f3a37c75816ddd8af00"
  },
  {
    "url": "assets/icon/doge.svg",
    "revision": "b677c271116630b9e318f550ef9538ee"
  },
  {
    "url": "assets/icon/drgn.svg",
    "revision": "6d53807967dae30bec39f0cbe467ec42"
  },
  {
    "url": "assets/icon/dta.svg",
    "revision": "d95285923b892464942a9b195743067d"
  },
  {
    "url": "assets/icon/dtr.svg",
    "revision": "f9a0e4d0f3356f15a4fb534fc6ad78d1"
  },
  {
    "url": "assets/icon/ebst.svg",
    "revision": "6f9470fe2e764a2b92073a0d9584fd3f"
  },
  {
    "url": "assets/icon/eca.svg",
    "revision": "1f192bdd3acc9841968e5acf20e1c8e1"
  },
  {
    "url": "assets/icon/edg.svg",
    "revision": "3db9ef8c0c3c55f9ef63f85ebb36f8df"
  },
  {
    "url": "assets/icon/edo.svg",
    "revision": "8aa3d8688ad7efb3c306a48e92be0de4"
  },
  {
    "url": "assets/icon/edoge.svg",
    "revision": "b697f5d4370dc1d6f5655958c07181e1"
  },
  {
    "url": "assets/icon/ela.svg",
    "revision": "310c878747a249d97721a1d2bd09fb38"
  },
  {
    "url": "assets/icon/elf.svg",
    "revision": "45fa95199f9923fa51587b14e616fc87"
  },
  {
    "url": "assets/icon/elix.svg",
    "revision": "82ffdac694af03de191d49b16b85f19a"
  },
  {
    "url": "assets/icon/ella.svg",
    "revision": "d0ee1f85381d43db577d978787b5d2a9"
  },
  {
    "url": "assets/icon/emc.svg",
    "revision": "bd986613c8136966cb24d3f5c1c10ac0"
  },
  {
    "url": "assets/icon/emc2.svg",
    "revision": "18b521a8213c9f6fe75d74dd5968bd38"
  },
  {
    "url": "assets/icon/eng.svg",
    "revision": "55b78e1d45e4a890e229b252dff6f641"
  },
  {
    "url": "assets/icon/enj.svg",
    "revision": "b86ff49654f6222a001b2a9a99e78a02"
  },
  {
    "url": "assets/icon/eos.svg",
    "revision": "087dc8f151c918eb1d711ef102a41379"
  },
  {
    "url": "assets/icon/equa.svg",
    "revision": "218c78715f10d03e6c3631b2a9599739"
  },
  {
    "url": "assets/icon/etc.svg",
    "revision": "fb88adff5a5273d04b4092b1c9058887"
  },
  {
    "url": "assets/icon/eth.svg",
    "revision": "dbf1f7d040b0febb872e53a6edea7ee8"
  },
  {
    "url": "assets/icon/ethos.svg",
    "revision": "76f414a7ac76ab7fbef808e3dfdf0e35"
  },
  {
    "url": "assets/icon/etn.svg",
    "revision": "39267e786349e781e21253b9d03d5f9c"
  },
  {
    "url": "assets/icon/etp.svg",
    "revision": "452dc829a956e5e7853cd130756d754a"
  },
  {
    "url": "assets/icon/eur.svg",
    "revision": "1f5a99900062df0e633e41ccbdeb6828"
  },
  {
    "url": "assets/icon/evx.svg",
    "revision": "e1c4ae1616ac17a9d5cf38b14e43ea84"
  },
  {
    "url": "assets/icon/exmo.svg",
    "revision": "6644ea69e725f451546c9064946fd26b"
  },
  {
    "url": "assets/icon/exp.svg",
    "revision": "b88b7985091a843b86bdd65d7ca126a8"
  },
  {
    "url": "assets/icon/fair.svg",
    "revision": "23e7cfb32d3d79974f039f1c70b1ff99"
  },
  {
    "url": "assets/icon/favicon.ico",
    "revision": "e2ba64f19a567d88e410fc307d4c0e21"
  },
  {
    "url": "assets/icon/fct.svg",
    "revision": "f5621dd310e1bf216b9a86532643f5f3"
  },
  {
    "url": "assets/icon/fil.svg",
    "revision": "f9eaf83cdbf8028befde512ba27a5530"
  },
  {
    "url": "assets/icon/fldc.svg",
    "revision": "5972c1dc141321ccd2725eb9953d3118"
  },
  {
    "url": "assets/icon/flo.svg",
    "revision": "3e789596b7045e9e293f1e41ad4c5239"
  },
  {
    "url": "assets/icon/fsn.svg",
    "revision": "f467c303f378a12ddbe24445398b5f79"
  },
  {
    "url": "assets/icon/ftc.svg",
    "revision": "5007243e82df183bc64f2fd08e1ddd91"
  },
  {
    "url": "assets/icon/fuel.svg",
    "revision": "7236a65e27d6dbae6b071149bd472416"
  },
  {
    "url": "assets/icon/fun.svg",
    "revision": "51bd24bf41c7bbb79155a7a1278b3a77"
  },
  {
    "url": "assets/icon/game.svg",
    "revision": "bba14e5dc51491c4825c7015739749fa"
  },
  {
    "url": "assets/icon/gas.svg",
    "revision": "4355881a6961836e2d4e11288fe5628c"
  },
  {
    "url": "assets/icon/gbp.svg",
    "revision": "7a641591abbb5475aff0cfbb021d209d"
  },
  {
    "url": "assets/icon/gbx.svg",
    "revision": "419abd82c2f23d46ab61f5a47fbf06b6"
  },
  {
    "url": "assets/icon/gbyte.svg",
    "revision": "3c13e564734c4d14027c51f19fa85f3a"
  },
  {
    "url": "assets/icon/generic.svg",
    "revision": "4504f2d114df649c4e2f029c6a1b5b89"
  },
  {
    "url": "assets/icon/gno.svg",
    "revision": "e9567025193f7a9e746f24ab8fb39309"
  },
  {
    "url": "assets/icon/gnt.svg",
    "revision": "18776be421069895c0498bfd5a453ad4"
  },
  {
    "url": "assets/icon/grc.svg",
    "revision": "d6792e87e9fabc79206c6e1d485e3923"
  },
  {
    "url": "assets/icon/grs.svg",
    "revision": "34343eabc0fbbdd6da5f0a7c8795a24b"
  },
  {
    "url": "assets/icon/gto.svg",
    "revision": "24dee98ae6c5880d805041d985d83c58"
  },
  {
    "url": "assets/icon/gup.svg",
    "revision": "103dda39c0c8f06a1375b26f3a0718f0"
  },
  {
    "url": "assets/icon/gvt.svg",
    "revision": "ba122c4421e85bc727c5c3d37f96c83e"
  },
  {
    "url": "assets/icon/gxs.svg",
    "revision": "6a1efa595e20c62d1b8e825053616cef"
  },
  {
    "url": "assets/icon/hpb.svg",
    "revision": "efb9ff376c3ca3821df67ef8f41ddf5f"
  },
  {
    "url": "assets/icon/hsr.svg",
    "revision": "7e21112701e5ae2cc0c9f1c81d18f425"
  },
  {
    "url": "assets/icon/html.svg",
    "revision": "d9032d46cd31495bdf9d0c88891a5092"
  },
  {
    "url": "assets/icon/huc.svg",
    "revision": "221fb31c17ce025e57a87b1170aa7629"
  },
  {
    "url": "assets/icon/hush.svg",
    "revision": "3281111a696012cb73a31eaeca96d1d1"
  },
  {
    "url": "assets/icon/icn.svg",
    "revision": "7fd2190a4d0e481958626467b4bcb570"
  },
  {
    "url": "assets/icon/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "assets/icon/icx.svg",
    "revision": "21a686a670ed2fb10516c06312b8627c"
  },
  {
    "url": "assets/icon/ignis.svg",
    "revision": "75be467cb1782f052113f41bcc48a7b3"
  },
  {
    "url": "assets/icon/ink.svg",
    "revision": "51ddf208fac4bff0ec443f7fcdfde64c"
  },
  {
    "url": "assets/icon/ins.svg",
    "revision": "ca60f77d6ace70c8b092af7592146f9b"
  },
  {
    "url": "assets/icon/ion.svg",
    "revision": "14ccdac045dba080348b56de3c34f2db"
  },
  {
    "url": "assets/icon/iop.svg",
    "revision": "c7ae3f9904d53097307afa3b29b76330"
  },
  {
    "url": "assets/icon/iost.svg",
    "revision": "17915edb4f6e9b1f16e5c5ee6fc0559f"
  },
  {
    "url": "assets/icon/itc.svg",
    "revision": "e8b5ed031606871efa8b9dda669d9863"
  },
  {
    "url": "assets/icon/jnt.svg",
    "revision": "3452c1ff7ccabef602ea0d2880acad28"
  },
  {
    "url": "assets/icon/jpy.svg",
    "revision": "ecc06af45b003e252d394d53584ed2ad"
  },
  {
    "url": "assets/icon/kcs.svg",
    "revision": "2e673fc1943f92c2d58b0983c75c622f"
  },
  {
    "url": "assets/icon/kin.svg",
    "revision": "355ea3c92bccc3428f7c6b62f375152e"
  },
  {
    "url": "assets/icon/kmd.svg",
    "revision": "1b434f3f58d62b538cab6c8621721014"
  },
  {
    "url": "assets/icon/knc.svg",
    "revision": "829f4c6ea3ec7d71c80d9335294b31c8"
  },
  {
    "url": "assets/icon/krb.svg",
    "revision": "3da8b7de6399b46eaa5b34765364414a"
  },
  {
    "url": "assets/icon/lbc.svg",
    "revision": "676fa3d6f6dd6407c5ac20ecedd7a1ee"
  },
  {
    "url": "assets/icon/lend.svg",
    "revision": "84533fe381628010550d51944553ef4f"
  },
  {
    "url": "assets/icon/link.svg",
    "revision": "520deb750b60c7b115f9a4ab5f69a796"
  },
  {
    "url": "assets/icon/lkk.svg",
    "revision": "5c73e2f850893b0b1a6a0cfa5d79732d"
  },
  {
    "url": "assets/icon/lrc.svg",
    "revision": "0e13fb2f125a234798df4af2118cf805"
  },
  {
    "url": "assets/icon/lsk.svg",
    "revision": "308d8df2f7dc0d980388d845b0f466d6"
  },
  {
    "url": "assets/icon/ltc.svg",
    "revision": "de69c6901be0d52d7119ac34f27d040d"
  },
  {
    "url": "assets/icon/lun.svg",
    "revision": "d253d4340310ae0a3e68b10ab5c9af5f"
  },
  {
    "url": "assets/icon/maid.svg",
    "revision": "74a9e23ade9b0f77473b68e946362a12"
  },
  {
    "url": "assets/icon/mana.svg",
    "revision": "6d01eab0bf119683bc399b28601e145f"
  },
  {
    "url": "assets/icon/mcap.svg",
    "revision": "a1ec23de2f2dfea52cb6b06d1639878f"
  },
  {
    "url": "assets/icon/mco.svg",
    "revision": "e5625d10892e776de887f8a286f08c0b"
  },
  {
    "url": "assets/icon/mda.svg",
    "revision": "05fe46ccb09e7072d184e4cde147e996"
  },
  {
    "url": "assets/icon/mds.svg",
    "revision": "3cfa52165f265930072846ae6db53ede"
  },
  {
    "url": "assets/icon/med.svg",
    "revision": "c68b5bc9ee3a62793bb45af8ac0b1821"
  },
  {
    "url": "assets/icon/miota.svg",
    "revision": "6f8388be396b112fee8c9ca3bf7276e6"
  },
  {
    "url": "assets/icon/mith.svg",
    "revision": "096c3bd2f42bde6bf3ee263717e971d2"
  },
  {
    "url": "assets/icon/mkr.svg",
    "revision": "0ebeb55360455e94dcaeaaae8e8a0d19"
  },
  {
    "url": "assets/icon/mln.svg",
    "revision": "85e03253b606a47a9552568ae2d93512"
  },
  {
    "url": "assets/icon/mnx.svg",
    "revision": "67e833ddf26d1baca31fd8a8e35d088b"
  },
  {
    "url": "assets/icon/mod.svg",
    "revision": "0d2f1c4eacc8ca9b4db6b525d1ca9b50"
  },
  {
    "url": "assets/icon/mona.svg",
    "revision": "012923043dcaaf0739c87b8af7a54150"
  },
  {
    "url": "assets/icon/mth.svg",
    "revision": "b2d33a52341be50cc7511616163be6e2"
  },
  {
    "url": "assets/icon/mtl.svg",
    "revision": "6d0b30fe922a427bc8c49684c9e5430e"
  },
  {
    "url": "assets/icon/music.svg",
    "revision": "59c8ddb012c9358cf41af54929a440d9"
  },
  {
    "url": "assets/icon/mzc.svg",
    "revision": "2f351ea9a475789d113eddecb6a0af5c"
  },
  {
    "url": "assets/icon/nano.svg",
    "revision": "f3fd9bb2724c21888e3af7d7e7c5b151"
  },
  {
    "url": "assets/icon/nas.svg",
    "revision": "32183ae50cbefe5d02d79dc197a8f976"
  },
  {
    "url": "assets/icon/nav.svg",
    "revision": "2612167e8808085a577134baab27ce33"
  },
  {
    "url": "assets/icon/ncash.svg",
    "revision": "ea955c83627ef89368e6ad186dbab163"
  },
  {
    "url": "assets/icon/ndz.svg",
    "revision": "f322e0d8db81bdea1a8f969b7a5c1a0f"
  },
  {
    "url": "assets/icon/nebl.svg",
    "revision": "50d9ffa2593df11de8b93d57c8349e39"
  },
  {
    "url": "assets/icon/neo.svg",
    "revision": "e42756bdb256789d25ee9fc7dfa61eb8"
  },
  {
    "url": "assets/icon/neos.svg",
    "revision": "137a98308f6c434e8cc9ad3aac7a4711"
  },
  {
    "url": "assets/icon/ngc.svg",
    "revision": "6438569ed2d317ee1d0e46b7d37a0461"
  },
  {
    "url": "assets/icon/nio.svg",
    "revision": "b8508c7f784223a203fec2da65f24d81"
  },
  {
    "url": "assets/icon/nlc2.svg",
    "revision": "b90cfc8246bff40518cbd4db4b7e6f32"
  },
  {
    "url": "assets/icon/nlg.svg",
    "revision": "a8c337d69bd69cdaa6f8b4764b0f707b"
  },
  {
    "url": "assets/icon/nmc.svg",
    "revision": "6c7026f2fe7ff1a08d7b009130993d21"
  },
  {
    "url": "assets/icon/nuls.svg",
    "revision": "07544c22bffd0f4fb288b732ac440012"
  },
  {
    "url": "assets/icon/nxs.svg",
    "revision": "a51e1807aea8775af23e83f072351379"
  },
  {
    "url": "assets/icon/nxt.svg",
    "revision": "a67e69d1a31fd98ef41b3e5e3e50b9e1"
  },
  {
    "url": "assets/icon/oax.svg",
    "revision": "ac0975fd0cea250775db91f23236c346"
  },
  {
    "url": "assets/icon/omg.svg",
    "revision": "31c4d298d4b11d0040a7c0758ebcfcbb"
  },
  {
    "url": "assets/icon/omni.svg",
    "revision": "b8d749daf0424d8c3f8f79cff67fc1ff"
  },
  {
    "url": "assets/icon/ont.svg",
    "revision": "faeef2377fa367cac0dc4db58c41b576"
  },
  {
    "url": "assets/icon/oot.svg",
    "revision": "87fef0fead589db55a6b630adf6765b8"
  },
  {
    "url": "assets/icon/ost.svg",
    "revision": "c0b890ffb231485b063eff3b636f05db"
  },
  {
    "url": "assets/icon/ox.svg",
    "revision": "63d17d78136d81346223462796d20145"
  },
  {
    "url": "assets/icon/part.svg",
    "revision": "7e5a504a920361cf5bb4fb22086f9ee9"
  },
  {
    "url": "assets/icon/pasl.svg",
    "revision": "f9617eb33b5a3cbc948aff9a4c483827"
  },
  {
    "url": "assets/icon/pay.svg",
    "revision": "72fd1945a21445f27c6238931a56bdf2"
  },
  {
    "url": "assets/icon/pink.svg",
    "revision": "a1e77c438ac6d57f65c02f7101975e30"
  },
  {
    "url": "assets/icon/pirl.svg",
    "revision": "1a39317f8d464f049243b99d5cc88de2"
  },
  {
    "url": "assets/icon/pivx.svg",
    "revision": "a781a3d111080044c2502fa88f666eb1"
  },
  {
    "url": "assets/icon/plr.svg",
    "revision": "06ea50314cae97d6710a2f798bca9e71"
  },
  {
    "url": "assets/icon/poa.svg",
    "revision": "221027183ef05abc5982a43d96c46aa1"
  },
  {
    "url": "assets/icon/poe.svg",
    "revision": "d71c90f4454870f34e068b0ef1225ebd"
  },
  {
    "url": "assets/icon/poly.svg",
    "revision": "adf0145d53de2cef7c381d9136b3549a"
  },
  {
    "url": "assets/icon/pot.svg",
    "revision": "edc71a3bc6f1aebd4dcb3f1fd7a70050"
  },
  {
    "url": "assets/icon/powr.svg",
    "revision": "0d10333981221d3357a5c3fe3152a294"
  },
  {
    "url": "assets/icon/ppc.svg",
    "revision": "18a7c6c0099a198ff4059cff4fb57280"
  },
  {
    "url": "assets/icon/ppp.svg",
    "revision": "b5719931d5b3111f359140bfda2e0884"
  },
  {
    "url": "assets/icon/ppt.svg",
    "revision": "7c55505a47935d4444fec78ba385f9d1"
  },
  {
    "url": "assets/icon/prl.svg",
    "revision": "d1b4542b58d4ff71088eafa3c75a99ce"
  },
  {
    "url": "assets/icon/pt.png",
    "revision": "451d917eeb47d62b3a4cbe6282b79494"
  },
  {
    "url": "assets/icon/pura.svg",
    "revision": "689acc4bd92b351c40cf4a7ded2769c2"
  },
  {
    "url": "assets/icon/qash.svg",
    "revision": "9b87cba8d9b75132c90cefd49b987213"
  },
  {
    "url": "assets/icon/qiwi.svg",
    "revision": "f5c7ebdeb56cc387c8f80ac4d8105052"
  },
  {
    "url": "assets/icon/qlc.svg",
    "revision": "07986c8dd381811079537c519ce776e5"
  },
  {
    "url": "assets/icon/qrl.svg",
    "revision": "4303de09a58c4656501c437f9f88572c"
  },
  {
    "url": "assets/icon/qsp.svg",
    "revision": "fbd8ef45096b5ba958f1761e7ea00a78"
  },
  {
    "url": "assets/icon/qtum.svg",
    "revision": "4c0b4575143ddc322d7854ac4de44e4e"
  },
  {
    "url": "assets/icon/r.svg",
    "revision": "aa3fcb419222b8c2a687c976e245a7a3"
  },
  {
    "url": "assets/icon/rads.svg",
    "revision": "dfad537a35c70c164eb2e702545ca96c"
  },
  {
    "url": "assets/icon/rcn.svg",
    "revision": "08241302c270a5694c1a87f8373a67d5"
  },
  {
    "url": "assets/icon/rdd.svg",
    "revision": "7513fe57b3f0d2fe40202d2d70ea35a7"
  },
  {
    "url": "assets/icon/rdn.svg",
    "revision": "40f5b19a2f5e3e0059b66d3607805a42"
  },
  {
    "url": "assets/icon/rep.svg",
    "revision": "9802d03709671a075a5d3f88371d790a"
  },
  {
    "url": "assets/icon/req.svg",
    "revision": "9c1af28f0301b66d9f084d11cd8320b4"
  },
  {
    "url": "assets/icon/rhoc.svg",
    "revision": "b24f4ae069b816f882fb25f4f85121af"
  },
  {
    "url": "assets/icon/ric.svg",
    "revision": "c741f3cf9297025df7a6beb22936df59"
  },
  {
    "url": "assets/icon/rise.svg",
    "revision": "6b115a66352761729109f0704dea314e"
  },
  {
    "url": "assets/icon/rlc.svg",
    "revision": "edf3da8017af9417b711a50c8533a8e5"
  },
  {
    "url": "assets/icon/rpx.svg",
    "revision": "4c8da3564303fab4242805c6aa20c8cc"
  },
  {
    "url": "assets/icon/rub.svg",
    "revision": "a4413f36219a06804f76e7e43847224f"
  },
  {
    "url": "assets/icon/rvn.svg",
    "revision": "c61a7dc8c6dd0900d072d6aeaf3b4e66"
  },
  {
    "url": "assets/icon/salt.svg",
    "revision": "e30a35c790b4d4672fe0ca9f39cecf18"
  },
  {
    "url": "assets/icon/san.svg",
    "revision": "137e1540a3c96fc38c57ae87cd24d1eb"
  },
  {
    "url": "assets/icon/sbd.svg",
    "revision": "a29339210c7e1cbbef001ef190a84972"
  },
  {
    "url": "assets/icon/sberbank.svg",
    "revision": "64a75fd82cbdc8acc705d2d928e789ae"
  },
  {
    "url": "assets/icon/sc.svg",
    "revision": "1e6d781de89ab7bd91ef519678a95241"
  },
  {
    "url": "assets/icon/sky.svg",
    "revision": "32caab5a1ca87696f371e09a9e1edb79"
  },
  {
    "url": "assets/icon/slr.svg",
    "revision": "788d157ba2de4b92e78a5119f4d7295a"
  },
  {
    "url": "assets/icon/sls.svg",
    "revision": "45128b4875ef4ae82cf2d46afe05ca75"
  },
  {
    "url": "assets/icon/smart.svg",
    "revision": "05b70a2f1d96999016d366666186a956"
  },
  {
    "url": "assets/icon/sngls.svg",
    "revision": "9adb6704ad2580d9c99cee6834ae39c3"
  },
  {
    "url": "assets/icon/snm.svg",
    "revision": "ed71e7b2d821b33e3110ad19c44bdad6"
  },
  {
    "url": "assets/icon/snt.svg",
    "revision": "1c1231135c80e3930dc00a3ee10a7fc3"
  },
  {
    "url": "assets/icon/spank.svg",
    "revision": "f740ebbc1ab1ee4bddf10b02a15d30a0"
  },
  {
    "url": "assets/icon/sphtx.svg",
    "revision": "fb72017eb3b7d37108ffb83ea781487e"
  },
  {
    "url": "assets/icon/srn.svg",
    "revision": "ce755bc1397cf5f81c24af6959b93ea8"
  },
  {
    "url": "assets/icon/start.svg",
    "revision": "c56e6c1555add38e12a3f80d0fd02158"
  },
  {
    "url": "assets/icon/steem.svg",
    "revision": "fea374b2a31b7641b8e2ed08e07700f4"
  },
  {
    "url": "assets/icon/storj.svg",
    "revision": "76194880b2494d839e6a7e81c9b31ba5"
  },
  {
    "url": "assets/icon/storm.svg",
    "revision": "33b8259f843a9b45b3c8c64af3bf019e"
  },
  {
    "url": "assets/icon/strat.svg",
    "revision": "1d730e5f07d229d9e843c701844f9411"
  },
  {
    "url": "assets/icon/sub.svg",
    "revision": "b45d711b505cc8d36ef022ebc9a2e75b"
  },
  {
    "url": "assets/icon/sumo.svg",
    "revision": "3c133148e860a7dfb21f6ee5d31a217f"
  },
  {
    "url": "assets/icon/sys.svg",
    "revision": "d0f0fc8b60068588466064a677e9e072"
  },
  {
    "url": "assets/icon/taas.svg",
    "revision": "e46ab4b8e5ff3e24ffa4fd98373d62e2"
  },
  {
    "url": "assets/icon/tau.svg",
    "revision": "8edd258aa0e13e5a3b5e3a3aa51f7803"
  },
  {
    "url": "assets/icon/tel.svg",
    "revision": "2617fd160f46fc144e01abf9763f904b"
  },
  {
    "url": "assets/icon/ten.svg",
    "revision": "641fb742491a5c328a2e2a97dae90ef5"
  },
  {
    "url": "assets/icon/theta.svg",
    "revision": "a8ff181e8b73b555ee6b81382cd7a730"
  },
  {
    "url": "assets/icon/tix.svg",
    "revision": "02e78d98fe89fc0a5b328f0647c2badd"
  },
  {
    "url": "assets/icon/tkn.svg",
    "revision": "8d726779c62ebe7a236cd7547339f8c2"
  },
  {
    "url": "assets/icon/tnb.svg",
    "revision": "6fbbc455643feb4664a5ce8c4ffc90c7"
  },
  {
    "url": "assets/icon/tnc.svg",
    "revision": "d087f03785ce69d877319f0087e4667a"
  },
  {
    "url": "assets/icon/tnt.svg",
    "revision": "8d17881c7855f09d1334a26213b5a579"
  },
  {
    "url": "assets/icon/trig.svg",
    "revision": "fda3975373441a1dd30f565d8de99767"
  },
  {
    "url": "assets/icon/trx.svg",
    "revision": "530e26da66a0d614f38b948d6a015c84"
  },
  {
    "url": "assets/icon/tzc.svg",
    "revision": "2775c532c16ae2cd574c2cae21cd9ed3"
  },
  {
    "url": "assets/icon/ubq.svg",
    "revision": "525f3c10714961d2c2d73b348546a692"
  },
  {
    "url": "assets/icon/unity.svg",
    "revision": "07b4dd97d14a18faa6cd78785d22c66a"
  },
  {
    "url": "assets/icon/usd.svg",
    "revision": "dbb8beb863ab4123c436d18dd597abb5"
  },
  {
    "url": "assets/icon/usdt.svg",
    "revision": "b02bd154d79e37e832f376e2b2d19ed8"
  },
  {
    "url": "assets/icon/utk.svg",
    "revision": "9b4ecf030c4da015a7486150abbe15db"
  },
  {
    "url": "assets/icon/ven.svg",
    "revision": "5b044cbce1bfd72c8ec1bb50eb9e42c0"
  },
  {
    "url": "assets/icon/veri.svg",
    "revision": "15cd990fe4cb962f7a9d042577003490"
  },
  {
    "url": "assets/icon/via.svg",
    "revision": "78e9fc393ad599e0d00e1d91b64e6964"
  },
  {
    "url": "assets/icon/vib.svg",
    "revision": "022eb0ce74ac72bc36327eeb90a70d49"
  },
  {
    "url": "assets/icon/vibe.svg",
    "revision": "ce22e93417b285cf6efe5d7b5cc1846d"
  },
  {
    "url": "assets/icon/vivo.svg",
    "revision": "653e04d6f70e0e8bb24d39dfed937baa"
  },
  {
    "url": "assets/icon/vrc.svg",
    "revision": "64db9e658069e4a2af3759c11f2d6d3c"
  },
  {
    "url": "assets/icon/vtc.svg",
    "revision": "10f3d2b107a48ec2b2ba5f5fd29ba7d4"
  },
  {
    "url": "assets/icon/wabi.svg",
    "revision": "a572d3859bc1b7f2c9841e8fb931403d"
  },
  {
    "url": "assets/icon/wan.svg",
    "revision": "9f53df91be2786310390ad517ac1e7c4"
  },
  {
    "url": "assets/icon/waves.svg",
    "revision": "2ae4c44bfcbfe6253c55624e8d6c6b05"
  },
  {
    "url": "assets/icon/wax.svg",
    "revision": "f09f77ca8dca3dd577f922232566b326"
  },
  {
    "url": "assets/icon/wgr.svg",
    "revision": "8c436a70a4e60e84508e2312016be851"
  },
  {
    "url": "assets/icon/wings.svg",
    "revision": "10103fa7829f374321598a1c9b480b7d"
  },
  {
    "url": "assets/icon/wpr.svg",
    "revision": "ae5fcb24ccda34e3187149939f9886e6"
  },
  {
    "url": "assets/icon/wtc.svg",
    "revision": "74d890cb118ce2dec42df4813a1e9a7f"
  },
  {
    "url": "assets/icon/xas.svg",
    "revision": "58173db6d1d00315e56f0f10013ae342"
  },
  {
    "url": "assets/icon/xbc.svg",
    "revision": "074edcbb9937bf1cd7ecddfae36d10fb"
  },
  {
    "url": "assets/icon/xby.svg",
    "revision": "2acff2d825463c1b057128c69d416b76"
  },
  {
    "url": "assets/icon/xcp.svg",
    "revision": "f0456c90d2e49955edfa45a6bf1f46f5"
  },
  {
    "url": "assets/icon/xdn.svg",
    "revision": "5064370cd3ff7602cef4f07bc3d474a7"
  },
  {
    "url": "assets/icon/xem.svg",
    "revision": "17c1bf2f0e63f783ef0c86cb76a19e36"
  },
  {
    "url": "assets/icon/xlm.svg",
    "revision": "c2ba88304d06f4ef14e4ed2a4af0084c"
  },
  {
    "url": "assets/icon/xmg.svg",
    "revision": "75d7a1709d452212069f785268e34d99"
  },
  {
    "url": "assets/icon/xmr.svg",
    "revision": "f65ca68f71ca87346d8019c7a52646cc"
  },
  {
    "url": "assets/icon/xmy.svg",
    "revision": "6fdd429a24f1238329fbdb6b0d92a540"
  },
  {
    "url": "assets/icon/xp.svg",
    "revision": "ca1e66b5360afd01b0d8065d697e666e"
  },
  {
    "url": "assets/icon/xpa.svg",
    "revision": "6b97e5d542605780767beae216ae2bdb"
  },
  {
    "url": "assets/icon/xpm.svg",
    "revision": "80e6b1942a56173b65119d06fb08d1b9"
  },
  {
    "url": "assets/icon/xrb.svg",
    "revision": "10ed0fc5bbe5043cafb28b30987e30e1"
  },
  {
    "url": "assets/icon/xrp.svg",
    "revision": "a22bc6a1bfdf9430dc22477173a00810"
  },
  {
    "url": "assets/icon/xtz.svg",
    "revision": "f812739a45c4cf7825be2cfb8560dc56"
  },
  {
    "url": "assets/icon/xuc.svg",
    "revision": "1845e21c60a8cda22616a9c0375244f6"
  },
  {
    "url": "assets/icon/xvc.svg",
    "revision": "3ad9da61f71350fc8aca860fa7c8a3cf"
  },
  {
    "url": "assets/icon/xvg.svg",
    "revision": "9817354cb211d5cab79c4960bfdb2f54"
  },
  {
    "url": "assets/icon/xzc.svg",
    "revision": "c600c771da259943e49bed9e8f502490"
  },
  {
    "url": "assets/icon/yoyow.svg",
    "revision": "4fdccaed5c5ef0c0dd5e7c0334a2b715"
  },
  {
    "url": "assets/icon/zcl.svg",
    "revision": "2e2fdc17402dd1a1c620a2d965b912b0"
  },
  {
    "url": "assets/icon/zec.svg",
    "revision": "eed21eede06f9fb553beb23a701a3e60"
  },
  {
    "url": "assets/icon/zel.svg",
    "revision": "3bc98c022e9ae3288eecd440fcd69da1"
  },
  {
    "url": "assets/icon/zen.svg",
    "revision": "193d1967877fdbff3db89c6da39ea5d3"
  },
  {
    "url": "assets/icon/zil.svg",
    "revision": "fa8803929fe33809439118af09761c2c"
  },
  {
    "url": "assets/icon/zrx.svg",
    "revision": "09d22c86d6632cda49217d34ce8b4504"
  },
  {
    "url": "assets/tutorial/apikeys.png",
    "revision": "bb7004bf76fdf36fb3ac9892ea347586"
  },
  {
    "url": "assets/tutorial/app-5.png",
    "revision": "c2b654e9c3e05a5c2b1a8ca3f874c92d"
  },
  {
    "url": "assets/tutorial/binancekeys.png",
    "revision": "95922b4c20dc0692f851f258c11de126"
  },
  {
    "url": "assets/tutorial/holdings.png",
    "revision": "09eb628af6179e2c2b943c62c93bd373"
  },
  {
    "url": "assets/tutorial/holdings2.png",
    "revision": "6f859feb8dcc7b92f8991a1cc4cf553c"
  },
  {
    "url": "assets/tutorial/ioshomescreen.png",
    "revision": "de5a80338483644aa1563ba707db8a79"
  },
  {
    "url": "assets/tutorial/ioshomescreen1.png",
    "revision": "64a27d8c02c5605e0dd1a6d255b12f13"
  },
  {
    "url": "assets/tutorial/refresh.png",
    "revision": "bd10d3de23a6da429507747e404f8896"
  },
  {
    "url": "assets/tutorial/settings.png",
    "revision": "51a325d3f9447f934fbfc44b5e43565e"
  },
  {
    "url": "assets/tutorial/trading.png",
    "revision": "4e9b744958422db8046a383b2d3d0747"
  },
  {
    "url": "assets/tutorial/welcome-img.png",
    "revision": "42ee323a02a7f19eaa14914a83345768"
  },
  {
    "url": "build/app.css",
    "revision": "2c895a5c0a14d88befe0f6f7b8c434e3"
  },
  {
    "url": "build/app.js",
    "revision": "387578120b7eb620f7d34749b642f918"
  },
  {
    "url": "build/app/app-balanceitem.ios.entry.js",
    "revision": "b123adde4e717513c17adef1433026e6"
  },
  {
    "url": "build/app/app-balanceitem.md.entry.js",
    "revision": "0a23ca815e999722a7165d18fd5ab927"
  },
  {
    "url": "build/app/app-barchart.entry.js",
    "revision": "e7669b7ef206800afa5b1f2679344db5"
  },
  {
    "url": "build/app/app-basecurrency.entry.js",
    "revision": "11463c64923b0bd8a47c3477b95f81c0"
  },
  {
    "url": "build/app/app-baseprice.entry.js",
    "revision": "13ea39d900bedf896275b07d8f9cc12f"
  },
  {
    "url": "build/app/app-dust.entry.js",
    "revision": "ac6c45f10b4727c6511c14d413c2df1a"
  },
  {
    "url": "build/app/app-editwallet.entry.js",
    "revision": "bc51d885cdb1f328f8209edf2e9357db"
  },
  {
    "url": "build/app/app-exchangebalances.entry.js",
    "revision": "cf8572355e49c59872e525160f2dbc40"
  },
  {
    "url": "build/app/app-exchangeitem.entry.js",
    "revision": "1c7cce1d05f9e9b403285e34adc1ae5d"
  },
  {
    "url": "build/app/app-exchangekeys.entry.js",
    "revision": "7dc02149e719490e7abce46726f914f2"
  },
  {
    "url": "build/app/app-exchanges.entry.js",
    "revision": "cb5f7b6186032f20d1b7bcbe69e3b4bd"
  },
  {
    "url": "build/app/app-holdings.ios.entry.js",
    "revision": "45c4cc03af3371168e6993d05b620022"
  },
  {
    "url": "build/app/app-holdings.md.entry.js",
    "revision": "4a15de822721d438235e5d7c89401dbd"
  },
  {
    "url": "build/app/app-keys.entry.js",
    "revision": "65ea17b8f5f8d0250a334f0f3e4375a1"
  },
  {
    "url": "build/app/app-order.entry.js",
    "revision": "211df5133a302ff9d4775a1cddf555ea"
  },
  {
    "url": "build/app/app-orders.entry.js",
    "revision": "39372419213285dbfad910581bfd6d47"
  },
  {
    "url": "build/app/app-overview.entry.js",
    "revision": "09ebed07340be59b1e5b5325eb67f4c3"
  },
  {
    "url": "build/app/app-pair.entry.js",
    "revision": "7e91c018f3a17889cbf4b1d4dc1e4e3d"
  },
  {
    "url": "build/app/app-panic.ios.entry.js",
    "revision": "cb4623cd2443816c65037423a56c7e7c"
  },
  {
    "url": "build/app/app-panic.md.entry.js",
    "revision": "03068547a46f9df5c8a90ac47e88fb4e"
  },
  {
    "url": "build/app/app-premium.entry.js",
    "revision": "3310c9a998de56b61df3f00b22d2406a"
  },
  {
    "url": "build/app/app-settings.entry.js",
    "revision": "f508fd8237c988a238ae933514a5259c"
  },
  {
    "url": "build/app/app-trade.entry.js",
    "revision": "47b22e2cf6d7a8afd3daa86f9cb1f157"
  },
  {
    "url": "build/app/app-tutorial.ios.entry.js",
    "revision": "81cf60d8e8d0fef4f27fd9b31a72cc63"
  },
  {
    "url": "build/app/app-tutorial.md.entry.js",
    "revision": "542afdeda359b5162ccec289b4456c58"
  },
  {
    "url": "build/app/app-wallets.entry.js",
    "revision": "fc89a9d93bae2481a30cc0fd9ddf4c15"
  },
  {
    "url": "build/app/app.core.js",
    "revision": "2ba775ea17114997e77ec75f85710694"
  },
  {
    "url": "build/app/chunk-0f8bcb1f.js",
    "revision": "7c07fd3340888182477eac1a6b608cff"
  },
  {
    "url": "build/app/chunk-60e5018c.js",
    "revision": "fe52a4773933e4ccf44298fe20e2e21c"
  },
  {
    "url": "build/app/chunk-7affb05f.js",
    "revision": "4051b7c6da5dee66586afa7b43ed7991"
  },
  {
    "url": "build/app/chunk-811498d8.js",
    "revision": "3eed8b9aab3863acd51364d5e3e76887"
  },
  {
    "url": "build/app/chunk-917ac8f0.js",
    "revision": "7d7bf4c0b0e4396f020d41085dc9c964"
  },
  {
    "url": "build/app/chunk-cb94efc7.js",
    "revision": "da0f7c5e1419e0e24869966b6e733bbc"
  },
  {
    "url": "build/app/es5-build-disabled.js",
    "revision": "77626f6635ef578390961e9e43005952"
  },
  {
    "url": "build/app/gesture.js",
    "revision": "4a398bf858ee52035dcebfbbc046ff51"
  },
  {
    "url": "build/app/hardware-back-button.js",
    "revision": "b493024fc1cc74b55425c152c84ebdde"
  },
  {
    "url": "build/app/input-shims.js",
    "revision": "6b5a801ff87c4beafbde0d2b6b5cf2b4"
  },
  {
    "url": "build/app/ion-back-button.ios.entry.js",
    "revision": "b3f3aa9c2e2de24f2138279726871be1"
  },
  {
    "url": "build/app/ion-back-button.md.entry.js",
    "revision": "f311c795db6750c58ac067a850096e18"
  },
  {
    "url": "build/app/ion-badge.ios.entry.js",
    "revision": "8d1160d1b0c04b62989322e9c2a5e5d1"
  },
  {
    "url": "build/app/ion-badge.md.entry.js",
    "revision": "fd7fac8e50c40f869d96f6c9c503b2c1"
  },
  {
    "url": "build/app/ion-button.ios.entry.js",
    "revision": "3513f4071aee0cbf3f529c6dc9f49bcb"
  },
  {
    "url": "build/app/ion-button.md.entry.js",
    "revision": "bda41f07f8aa7f0a2613390cebcd938b"
  },
  {
    "url": "build/app/ion-col.ios.entry.js",
    "revision": "188b93547e2eee22dee0e16af9790cf2"
  },
  {
    "url": "build/app/ion-col.md.entry.js",
    "revision": "b27a2ee1ce47c201a2b0b6fcc86b057c"
  },
  {
    "url": "build/app/ion-icon.entry.js",
    "revision": "2c9034c8ee0a4d8a49969b41e6bcd9ed"
  },
  {
    "url": "build/app/ion-label.ios.entry.js",
    "revision": "9091a87cbf97259547bccadaf8205983"
  },
  {
    "url": "build/app/ion-label.md.entry.js",
    "revision": "eea727b64991a4ff8147fd3aec0a414f"
  },
  {
    "url": "build/app/ion-ripple-effect.entry.js",
    "revision": "341504731c64756b2ceb2462c46255da"
  },
  {
    "url": "build/app/ios.transition.js",
    "revision": "362b7cf68c74abb6e2441cff64381caa"
  },
  {
    "url": "build/app/md.transition.js",
    "revision": "c408da59cdf62a6ec265c945f154a441"
  },
  {
    "url": "build/app/my-app.ios.entry.js",
    "revision": "cd2e08567a8b0f7e614b890957139c7f"
  },
  {
    "url": "build/app/my-app.md.entry.js",
    "revision": "8e7ccb96c6e7253a756a03de58818a77"
  },
  {
    "url": "build/app/status-tap.js",
    "revision": "a6919d55f49e9628b01d4ee821f89667"
  },
  {
    "url": "build/app/svg/index.js",
    "revision": "35b1701e9c9c1dacb8be33a8bace509b"
  },
  {
    "url": "build/app/svg/ios-add-circle-outline.svg",
    "revision": "e3a9f2f687b3ee74d58820b793f2b248"
  },
  {
    "url": "build/app/svg/ios-add-circle.svg",
    "revision": "25f2a81bd919d127dadd08f5196664b5"
  },
  {
    "url": "build/app/svg/ios-add.svg",
    "revision": "2cb95301c44b09941b851104b6580829"
  },
  {
    "url": "build/app/svg/ios-airplane.svg",
    "revision": "55a73c2b79459e5406516b3250dc6b5b"
  },
  {
    "url": "build/app/svg/ios-alarm.svg",
    "revision": "e66a15bbeef9289982475419cfc1e72f"
  },
  {
    "url": "build/app/svg/ios-albums.svg",
    "revision": "a374f8b0f4fc369f6d6de9df29ac66a1"
  },
  {
    "url": "build/app/svg/ios-alert.svg",
    "revision": "80af9b4a632a8f6dbd5d107a2dfb52b8"
  },
  {
    "url": "build/app/svg/ios-american-football.svg",
    "revision": "f5ad3ee86c68ef271248a066ebd36ff7"
  },
  {
    "url": "build/app/svg/ios-analytics.svg",
    "revision": "4d4bb303d1fc1f4f64167a7fc962d837"
  },
  {
    "url": "build/app/svg/ios-aperture.svg",
    "revision": "f7015431f586cd38d97eb0a6485a591a"
  },
  {
    "url": "build/app/svg/ios-apps.svg",
    "revision": "77b5497cc2cf2b63cced36d7850515fc"
  },
  {
    "url": "build/app/svg/ios-appstore.svg",
    "revision": "426f0862712673012efdf90748351737"
  },
  {
    "url": "build/app/svg/ios-archive.svg",
    "revision": "ec93fa373cc8cd538b0f026b5433a958"
  },
  {
    "url": "build/app/svg/ios-arrow-back.svg",
    "revision": "870690d288f124530703b21807a410c7"
  },
  {
    "url": "build/app/svg/ios-arrow-down.svg",
    "revision": "7263e94fedf8e3642f9a71ffce663f0d"
  },
  {
    "url": "build/app/svg/ios-arrow-dropdown-circle.svg",
    "revision": "ac67ab6d18b3f09b963f54d6cd3533af"
  },
  {
    "url": "build/app/svg/ios-arrow-dropdown.svg",
    "revision": "ddbb8461ecca7285874abcde06360ed7"
  },
  {
    "url": "build/app/svg/ios-arrow-dropleft-circle.svg",
    "revision": "440c0e1b75d6f3ff2b37a980208ae7f0"
  },
  {
    "url": "build/app/svg/ios-arrow-dropleft.svg",
    "revision": "ebff291c0593ed2ee82716367feab22f"
  },
  {
    "url": "build/app/svg/ios-arrow-dropright-circle.svg",
    "revision": "f740cc88e47e2e4202cea1352d0faedb"
  },
  {
    "url": "build/app/svg/ios-arrow-dropright.svg",
    "revision": "608198260afefb39e2ab329c35e595c0"
  },
  {
    "url": "build/app/svg/ios-arrow-dropup-circle.svg",
    "revision": "38670abdcad0294495bb19c9917eee83"
  },
  {
    "url": "build/app/svg/ios-arrow-dropup.svg",
    "revision": "80a7e2b16266329e1353f4959cdbcb38"
  },
  {
    "url": "build/app/svg/ios-arrow-forward.svg",
    "revision": "34ad64270469944a598e719cf9c29444"
  },
  {
    "url": "build/app/svg/ios-arrow-round-back.svg",
    "revision": "c3a732cdaf5b404041e05cefe032ae44"
  },
  {
    "url": "build/app/svg/ios-arrow-round-down.svg",
    "revision": "3ceed256e24e53bbe70a9ce62af98ffe"
  },
  {
    "url": "build/app/svg/ios-arrow-round-forward.svg",
    "revision": "c6315be08b7eccc6ddc1209da84ecdd8"
  },
  {
    "url": "build/app/svg/ios-arrow-round-up.svg",
    "revision": "14aa8e971cdcb34bed3bc3dbebcac729"
  },
  {
    "url": "build/app/svg/ios-arrow-up.svg",
    "revision": "7a0ca93229745aac41173dc5cf2d22a6"
  },
  {
    "url": "build/app/svg/ios-at.svg",
    "revision": "f5b9c225e4b22ef63ea0b6d140f19ec8"
  },
  {
    "url": "build/app/svg/ios-attach.svg",
    "revision": "fe71219f9af133a03bbaf945e7f722d0"
  },
  {
    "url": "build/app/svg/ios-backspace.svg",
    "revision": "3e8ce21a36203acb6e83deb5ce02092b"
  },
  {
    "url": "build/app/svg/ios-barcode.svg",
    "revision": "29f38fb61ee2d03d2b079ddac6dec825"
  },
  {
    "url": "build/app/svg/ios-baseball.svg",
    "revision": "484cd4bdcd2d6a5309708e89964380ac"
  },
  {
    "url": "build/app/svg/ios-basket.svg",
    "revision": "d341ba6c5dbaf3266253445b0689000e"
  },
  {
    "url": "build/app/svg/ios-basketball.svg",
    "revision": "30ac26ed4f3941cd0a0fc48888e7d65e"
  },
  {
    "url": "build/app/svg/ios-battery-charging.svg",
    "revision": "2608b14850b2d03b274149f7e7e294f0"
  },
  {
    "url": "build/app/svg/ios-battery-dead.svg",
    "revision": "4bfec6a457aae08903af11db68088b1a"
  },
  {
    "url": "build/app/svg/ios-battery-full.svg",
    "revision": "992ccb8eadc75194b7eb1702e5c80afc"
  },
  {
    "url": "build/app/svg/ios-beaker.svg",
    "revision": "00f085e7f4bea9344217385a115f635d"
  },
  {
    "url": "build/app/svg/ios-bed.svg",
    "revision": "edf7025d14316df2c669a49449abd7dd"
  },
  {
    "url": "build/app/svg/ios-beer.svg",
    "revision": "0e9275f4a73ff626d7f197abd12d00ce"
  },
  {
    "url": "build/app/svg/ios-bicycle.svg",
    "revision": "edfaa92fd059e74ba4aba5df359df44d"
  },
  {
    "url": "build/app/svg/ios-bluetooth.svg",
    "revision": "b913deea9a87e0c79c17f28ffc7fb325"
  },
  {
    "url": "build/app/svg/ios-boat.svg",
    "revision": "e08fdee3a6ba21053b97e8d3ea97a1cb"
  },
  {
    "url": "build/app/svg/ios-body.svg",
    "revision": "6308adf47185f99ef2b3b021c8d34033"
  },
  {
    "url": "build/app/svg/ios-bonfire.svg",
    "revision": "edb56a186d476ec547a77dd96864191a"
  },
  {
    "url": "build/app/svg/ios-book.svg",
    "revision": "996d8c7d69414050f815174ca8b8892e"
  },
  {
    "url": "build/app/svg/ios-bookmark.svg",
    "revision": "c39612e8d5149892135a98c6aa16c754"
  },
  {
    "url": "build/app/svg/ios-bookmarks.svg",
    "revision": "aef6abbae8f00ce51fec93c33f5d8582"
  },
  {
    "url": "build/app/svg/ios-bowtie.svg",
    "revision": "6bf750bba04a9aec7f9f731ad67e247f"
  },
  {
    "url": "build/app/svg/ios-briefcase.svg",
    "revision": "67a166ffd1b22d3b8b1a07f42ebc666d"
  },
  {
    "url": "build/app/svg/ios-browsers.svg",
    "revision": "691f0713c741d37f85cd752691a69738"
  },
  {
    "url": "build/app/svg/ios-brush.svg",
    "revision": "61f0abe937e6bed8dea8dbb45f5ef764"
  },
  {
    "url": "build/app/svg/ios-bug.svg",
    "revision": "38751a5f77542d48e9ad1a3a5502a960"
  },
  {
    "url": "build/app/svg/ios-build.svg",
    "revision": "767c1fd0a7bfb7b723e95fd0455bb4e5"
  },
  {
    "url": "build/app/svg/ios-bulb.svg",
    "revision": "7a7f90f37f0fc2a35e83fc8af7144c2e"
  },
  {
    "url": "build/app/svg/ios-bus.svg",
    "revision": "f1624a25fb61af998a851f40a8c3ebd8"
  },
  {
    "url": "build/app/svg/ios-business.svg",
    "revision": "c04e5b35f1c123be7e187983c206dc42"
  },
  {
    "url": "build/app/svg/ios-cafe.svg",
    "revision": "89e900312ec68dfb3ec538f03559f59f"
  },
  {
    "url": "build/app/svg/ios-calculator.svg",
    "revision": "d02588d1c48c7f82fffa916273cbe431"
  },
  {
    "url": "build/app/svg/ios-calendar.svg",
    "revision": "5453e7066da50d4d3291442ec0ff9fc4"
  },
  {
    "url": "build/app/svg/ios-call.svg",
    "revision": "58e002ddaa03e0e330c76ba6ccaa8035"
  },
  {
    "url": "build/app/svg/ios-camera.svg",
    "revision": "ca4e94fa493fc9bce6141b9d95f79f98"
  },
  {
    "url": "build/app/svg/ios-car.svg",
    "revision": "84545fddfebf8149fe1e9ce2a40f421b"
  },
  {
    "url": "build/app/svg/ios-card.svg",
    "revision": "e6ed23260ef975c46fd8eeeae0b1b071"
  },
  {
    "url": "build/app/svg/ios-cart.svg",
    "revision": "b4a30bdded68c3915952977cb25fdf06"
  },
  {
    "url": "build/app/svg/ios-cash.svg",
    "revision": "2d670abce1e5f389614de7b42af3c990"
  },
  {
    "url": "build/app/svg/ios-cellular.svg",
    "revision": "241c6df6d21822801ca7949442bd7df4"
  },
  {
    "url": "build/app/svg/ios-chatboxes.svg",
    "revision": "e286abea9af29bce430ca129a8a8a0b0"
  },
  {
    "url": "build/app/svg/ios-chatbubbles.svg",
    "revision": "67cc3b7e735a16d80b0a64529c3b3887"
  },
  {
    "url": "build/app/svg/ios-checkbox-outline.svg",
    "revision": "dc2e64eec181b3dd772049caca6ed071"
  },
  {
    "url": "build/app/svg/ios-checkbox.svg",
    "revision": "7bb4da9dd7bab3b086d80fe01de2dffa"
  },
  {
    "url": "build/app/svg/ios-checkmark-circle-outline.svg",
    "revision": "c4d4981ca99fcfaaa1b0e8ecd6d4e83a"
  },
  {
    "url": "build/app/svg/ios-checkmark-circle.svg",
    "revision": "2199536be881d80f69886059151d3c73"
  },
  {
    "url": "build/app/svg/ios-checkmark.svg",
    "revision": "a9500f2ca652ced3383fdcd7d43244ab"
  },
  {
    "url": "build/app/svg/ios-clipboard.svg",
    "revision": "db2fd514100497a367f9b0257c28771b"
  },
  {
    "url": "build/app/svg/ios-clock.svg",
    "revision": "eefa347bc85e0d3c2b2f0db0567fe21b"
  },
  {
    "url": "build/app/svg/ios-close-circle-outline.svg",
    "revision": "3dcea32cc7e335367524a0dc49dba8aa"
  },
  {
    "url": "build/app/svg/ios-close-circle.svg",
    "revision": "045d23e14a91e538885b19af70d31366"
  },
  {
    "url": "build/app/svg/ios-close.svg",
    "revision": "91fc43e19f3729d4fefaec1e24cd11e1"
  },
  {
    "url": "build/app/svg/ios-cloud-circle.svg",
    "revision": "016143622a291772fc3ded324eb03185"
  },
  {
    "url": "build/app/svg/ios-cloud-done.svg",
    "revision": "7c0ec8d8a1ab067e2825002664133965"
  },
  {
    "url": "build/app/svg/ios-cloud-download.svg",
    "revision": "11442ba2b348e60bc193d04a39f61a18"
  },
  {
    "url": "build/app/svg/ios-cloud-outline.svg",
    "revision": "28bee076ebe5d51d1066ee3bb09492bf"
  },
  {
    "url": "build/app/svg/ios-cloud-upload.svg",
    "revision": "fea5c37a5d62b392e0b15a2cc1acfe5a"
  },
  {
    "url": "build/app/svg/ios-cloud.svg",
    "revision": "2de53d7bff2bc45fdd4b860e76f74068"
  },
  {
    "url": "build/app/svg/ios-cloudy-night.svg",
    "revision": "648e87f9efc874219766d06817247de9"
  },
  {
    "url": "build/app/svg/ios-cloudy.svg",
    "revision": "f7bf5d2a2d25d025f76a35dfa9c917d3"
  },
  {
    "url": "build/app/svg/ios-code-download.svg",
    "revision": "df5d303ee4f6f94712924124ab540456"
  },
  {
    "url": "build/app/svg/ios-code-working.svg",
    "revision": "c84611ad2e04ceed66e6d506c2fb3029"
  },
  {
    "url": "build/app/svg/ios-code.svg",
    "revision": "f922b4df493c34777a9f203067dde6dc"
  },
  {
    "url": "build/app/svg/ios-cog.svg",
    "revision": "1886c06e66fdf4768e7ec8fa6e08c2a0"
  },
  {
    "url": "build/app/svg/ios-color-fill.svg",
    "revision": "c4c0a7a51df424b11610e5a0bb528883"
  },
  {
    "url": "build/app/svg/ios-color-filter.svg",
    "revision": "804813949c5dc6c871a029dc6b46c1b8"
  },
  {
    "url": "build/app/svg/ios-color-palette.svg",
    "revision": "b2ce1b899f4682082e1bdad5733e9834"
  },
  {
    "url": "build/app/svg/ios-color-wand.svg",
    "revision": "af5b964f055fec21d5512ebcc8be08c4"
  },
  {
    "url": "build/app/svg/ios-compass.svg",
    "revision": "f82439ac95391220a602fc5c8ac45eed"
  },
  {
    "url": "build/app/svg/ios-construct.svg",
    "revision": "359788e8a850892bb91a4620f5cb5f0a"
  },
  {
    "url": "build/app/svg/ios-contact.svg",
    "revision": "880cdcac37b032258e5415ca1311db7c"
  },
  {
    "url": "build/app/svg/ios-contacts.svg",
    "revision": "7a65f865cac99887b73a93586780bb74"
  },
  {
    "url": "build/app/svg/ios-contract.svg",
    "revision": "a838f7828e43f86ae817df5eb9abdf40"
  },
  {
    "url": "build/app/svg/ios-contrast.svg",
    "revision": "1b6f1155eb6d8871d0ed8b7e8a66c908"
  },
  {
    "url": "build/app/svg/ios-copy.svg",
    "revision": "2a4db2cb58630272a434a0143b90956b"
  },
  {
    "url": "build/app/svg/ios-create.svg",
    "revision": "5290b1ac22320048a2af016d012cc492"
  },
  {
    "url": "build/app/svg/ios-crop.svg",
    "revision": "56ec7f79dd15fe41f66420cb0f30ddf3"
  },
  {
    "url": "build/app/svg/ios-cube.svg",
    "revision": "060b2c3510cda3f1a369739b3bf20cdb"
  },
  {
    "url": "build/app/svg/ios-cut.svg",
    "revision": "400954d3123a284809aa9558ee535df8"
  },
  {
    "url": "build/app/svg/ios-desktop.svg",
    "revision": "0f4315521ee15af6b63c0a516cb51438"
  },
  {
    "url": "build/app/svg/ios-disc.svg",
    "revision": "870f2dd8f8083ad09d8a76d5b9d0117e"
  },
  {
    "url": "build/app/svg/ios-document.svg",
    "revision": "a692c4910eccf2f3c8690884a777b3c0"
  },
  {
    "url": "build/app/svg/ios-done-all.svg",
    "revision": "bd421527dcd18dbabc386afe9cde389e"
  },
  {
    "url": "build/app/svg/ios-download.svg",
    "revision": "617c2bba050589c743570ccbce5b0b6e"
  },
  {
    "url": "build/app/svg/ios-easel.svg",
    "revision": "d56d335ba6078c385d9217d5e543b6c6"
  },
  {
    "url": "build/app/svg/ios-egg.svg",
    "revision": "61371e93125d20a17d47e51bc1a37efb"
  },
  {
    "url": "build/app/svg/ios-exit.svg",
    "revision": "9571a4395f3de87305d4b40be3e1096c"
  },
  {
    "url": "build/app/svg/ios-expand.svg",
    "revision": "8d6acbb6beeab5e370d82b32b749e1d5"
  },
  {
    "url": "build/app/svg/ios-eye-off.svg",
    "revision": "6de634b234457695291ee722742dd24d"
  },
  {
    "url": "build/app/svg/ios-eye.svg",
    "revision": "540ca603a758367b97cd7c2d97fca880"
  },
  {
    "url": "build/app/svg/ios-fastforward.svg",
    "revision": "1be797490eb054fed3f5b169b6fa60ff"
  },
  {
    "url": "build/app/svg/ios-female.svg",
    "revision": "0331d98221eff8def990e7b87849d813"
  },
  {
    "url": "build/app/svg/ios-filing.svg",
    "revision": "a7d2de58fb1987e92da8d38b1a860fb0"
  },
  {
    "url": "build/app/svg/ios-film.svg",
    "revision": "ca296b3b778bc72884fb9c6e4e50d5ed"
  },
  {
    "url": "build/app/svg/ios-finger-print.svg",
    "revision": "82accc8a43e862330869f8a3deeb58d4"
  },
  {
    "url": "build/app/svg/ios-fitness.svg",
    "revision": "d7cce0c4a9b2463004c3cff26db616af"
  },
  {
    "url": "build/app/svg/ios-flag.svg",
    "revision": "5b62c93f19692d0ef6ce1c1d1638e935"
  },
  {
    "url": "build/app/svg/ios-flame.svg",
    "revision": "254d0694817e4f085f70b0d95dead329"
  },
  {
    "url": "build/app/svg/ios-flash-off.svg",
    "revision": "d6a9695fec310d43943368b1ef5e2475"
  },
  {
    "url": "build/app/svg/ios-flash.svg",
    "revision": "ee8ef10f255a4428de9de8ecfacc1187"
  },
  {
    "url": "build/app/svg/ios-flashlight.svg",
    "revision": "198292ce69fbbae6962c10b35eaba949"
  },
  {
    "url": "build/app/svg/ios-flask.svg",
    "revision": "1efc53c782eb310d23fcbd52ee79366e"
  },
  {
    "url": "build/app/svg/ios-flower.svg",
    "revision": "396e6d6776144cb5db242c6cdeccec67"
  },
  {
    "url": "build/app/svg/ios-folder-open.svg",
    "revision": "8e9668408ec87cce5f443008970e198d"
  },
  {
    "url": "build/app/svg/ios-folder.svg",
    "revision": "cccc139f2578b81d642cd84c9186710a"
  },
  {
    "url": "build/app/svg/ios-football.svg",
    "revision": "4cd5e4ddacebdffbbb6a33f135e5eef6"
  },
  {
    "url": "build/app/svg/ios-funnel.svg",
    "revision": "5ef19496afd525a39d392653c50e9497"
  },
  {
    "url": "build/app/svg/ios-gift.svg",
    "revision": "e1918564c234b895170117a974975efb"
  },
  {
    "url": "build/app/svg/ios-git-branch.svg",
    "revision": "96df9373cb658fa839bc6e6a82ad813f"
  },
  {
    "url": "build/app/svg/ios-git-commit.svg",
    "revision": "8aabe86d2d687314bcd006eab38a84c9"
  },
  {
    "url": "build/app/svg/ios-git-compare.svg",
    "revision": "92c4be0ab4095f31aaa9b5815b01864a"
  },
  {
    "url": "build/app/svg/ios-git-merge.svg",
    "revision": "3686d876c2a898a61263c3c4258f2bed"
  },
  {
    "url": "build/app/svg/ios-git-network.svg",
    "revision": "01863984d00bb730d6e2ac33979a25f9"
  },
  {
    "url": "build/app/svg/ios-git-pull-request.svg",
    "revision": "ba4f8467df7068b94f82299f513a1006"
  },
  {
    "url": "build/app/svg/ios-glasses.svg",
    "revision": "b3a62b49a7b482edc512f666a31534ac"
  },
  {
    "url": "build/app/svg/ios-globe.svg",
    "revision": "f74670c8f31f956b48ec63837ff019d4"
  },
  {
    "url": "build/app/svg/ios-grid.svg",
    "revision": "6361f0df06d7c8e1e1bd7a4c404b285f"
  },
  {
    "url": "build/app/svg/ios-hammer.svg",
    "revision": "ebb39ea4f254307d1c3be843134af40f"
  },
  {
    "url": "build/app/svg/ios-hand.svg",
    "revision": "a888e451f6756de0cd1a6d5dcbdd3549"
  },
  {
    "url": "build/app/svg/ios-happy.svg",
    "revision": "1fb7ccc3185e3bac7c642640544f6889"
  },
  {
    "url": "build/app/svg/ios-headset.svg",
    "revision": "9706bb0015f5e906fda942cefa8e5a04"
  },
  {
    "url": "build/app/svg/ios-heart-dislike.svg",
    "revision": "a335ca3d7ef0b56c0e4d77e50b7014a5"
  },
  {
    "url": "build/app/svg/ios-heart-empty.svg",
    "revision": "62676aa5f6a750eeb7823de630049571"
  },
  {
    "url": "build/app/svg/ios-heart-half.svg",
    "revision": "3015bda7e3f518f7e5dd0790d0ba81a8"
  },
  {
    "url": "build/app/svg/ios-heart.svg",
    "revision": "70501ebb3200f5e0eaaa86e010500f69"
  },
  {
    "url": "build/app/svg/ios-help-buoy.svg",
    "revision": "07ac058965f1f7a13797fd069d44788f"
  },
  {
    "url": "build/app/svg/ios-help-circle-outline.svg",
    "revision": "6524a35bb4e8628a4a2578d110dae24a"
  },
  {
    "url": "build/app/svg/ios-help-circle.svg",
    "revision": "c7cd8d694764134c66c053e949504426"
  },
  {
    "url": "build/app/svg/ios-help.svg",
    "revision": "711abf9692f10591e4eec305ebe073f2"
  },
  {
    "url": "build/app/svg/ios-home.svg",
    "revision": "b3a937c989493f4d47e132b98969ed6d"
  },
  {
    "url": "build/app/svg/ios-hourglass.svg",
    "revision": "3f0df3393f0c104aa66ecc44296dc846"
  },
  {
    "url": "build/app/svg/ios-ice-cream.svg",
    "revision": "e18555385531994a4417d3b02f41c04c"
  },
  {
    "url": "build/app/svg/ios-image.svg",
    "revision": "c2d00837584cea9b339f58a804606a9d"
  },
  {
    "url": "build/app/svg/ios-images.svg",
    "revision": "d7f458e4000748b062989d24d6c6b8ab"
  },
  {
    "url": "build/app/svg/ios-infinite.svg",
    "revision": "fe08e3ab4834437f6f37499997395b56"
  },
  {
    "url": "build/app/svg/ios-information-circle-outline.svg",
    "revision": "1060abc0b193d38ad3d7553db0ee228e"
  },
  {
    "url": "build/app/svg/ios-information-circle.svg",
    "revision": "4792d284aec1baa9dab63f21e7d713d5"
  },
  {
    "url": "build/app/svg/ios-information.svg",
    "revision": "1acfdf215a9753b8dc948d476851f432"
  },
  {
    "url": "build/app/svg/ios-jet.svg",
    "revision": "930e88d847a6c33d0460e5605f06bb6a"
  },
  {
    "url": "build/app/svg/ios-journal.svg",
    "revision": "7f15ea7809159a06694887eece475f70"
  },
  {
    "url": "build/app/svg/ios-key.svg",
    "revision": "c460c5cdc6dd1c9c78cd8340bdb09abe"
  },
  {
    "url": "build/app/svg/ios-keypad.svg",
    "revision": "eca7d6a6cd24be563029f87ea629ee9b"
  },
  {
    "url": "build/app/svg/ios-laptop.svg",
    "revision": "617fdd4a608df9a2e59854bb6e0f5850"
  },
  {
    "url": "build/app/svg/ios-leaf.svg",
    "revision": "affb9606aab7c2224fed0bbb4b6757fe"
  },
  {
    "url": "build/app/svg/ios-link.svg",
    "revision": "153963b91936a6d6963e38e767885d43"
  },
  {
    "url": "build/app/svg/ios-list-box.svg",
    "revision": "a9797658cc193ec3c7b7386deca5d4a3"
  },
  {
    "url": "build/app/svg/ios-list.svg",
    "revision": "d4d689ab41c4ccbd0ede829b4470288b"
  },
  {
    "url": "build/app/svg/ios-locate.svg",
    "revision": "e4e11721c6d3612acfa72bb591b60ce0"
  },
  {
    "url": "build/app/svg/ios-lock.svg",
    "revision": "00c8437a9bdc5c5af2fd2c745755d1be"
  },
  {
    "url": "build/app/svg/ios-log-in.svg",
    "revision": "eed1898b119d8ad73d5a9c7dbfaf722a"
  },
  {
    "url": "build/app/svg/ios-log-out.svg",
    "revision": "64666e4031635f5d90b22172b98a62b5"
  },
  {
    "url": "build/app/svg/ios-magnet.svg",
    "revision": "436eacf15a54837c3cdb59aab1086969"
  },
  {
    "url": "build/app/svg/ios-mail-open.svg",
    "revision": "acd756e2406a0103cf74b7966ab0856a"
  },
  {
    "url": "build/app/svg/ios-mail-unread.svg",
    "revision": "2175fd907ffde6ad67744cddf3b0510f"
  },
  {
    "url": "build/app/svg/ios-mail.svg",
    "revision": "8de2881eddd3b0250dc6f52f57292eda"
  },
  {
    "url": "build/app/svg/ios-male.svg",
    "revision": "d01fb1a138e9136e2285f4c3cff89ad0"
  },
  {
    "url": "build/app/svg/ios-man.svg",
    "revision": "512dd1d1cf66ddd2b7785ae2aa7c33cc"
  },
  {
    "url": "build/app/svg/ios-map.svg",
    "revision": "3e4eccd03bdc3cec13b5a5c7226c5418"
  },
  {
    "url": "build/app/svg/ios-medal.svg",
    "revision": "128a419a0f9987855547883193e884e7"
  },
  {
    "url": "build/app/svg/ios-medical.svg",
    "revision": "7d04893551337eec513ec0e16fd0ed4c"
  },
  {
    "url": "build/app/svg/ios-medkit.svg",
    "revision": "4e900541f64a4db1e481902ce113bc9c"
  },
  {
    "url": "build/app/svg/ios-megaphone.svg",
    "revision": "8a24fce5b10b97cb0c080f49487eb6a1"
  },
  {
    "url": "build/app/svg/ios-menu.svg",
    "revision": "da93b3c4b97a15f0de4fa5b5cecfad8e"
  },
  {
    "url": "build/app/svg/ios-mic-off.svg",
    "revision": "18ecd755be2c5e11875c1fdbd76c600e"
  },
  {
    "url": "build/app/svg/ios-mic.svg",
    "revision": "afbb719ffdff4e9ae4cbdb747389155a"
  },
  {
    "url": "build/app/svg/ios-microphone.svg",
    "revision": "39d8c810b260118c869668fa9221338e"
  },
  {
    "url": "build/app/svg/ios-moon.svg",
    "revision": "da5273cb0e21fd2adec1734ef8b73238"
  },
  {
    "url": "build/app/svg/ios-more.svg",
    "revision": "fe8044819fa0a4dfe024da7705cae1dd"
  },
  {
    "url": "build/app/svg/ios-move.svg",
    "revision": "0241f01b324b5ed372bc0168604833de"
  },
  {
    "url": "build/app/svg/ios-musical-note.svg",
    "revision": "505bf3a64c0ec38b77286c8432506175"
  },
  {
    "url": "build/app/svg/ios-musical-notes.svg",
    "revision": "9309b13aa76171edd3e75dc22a72b74d"
  },
  {
    "url": "build/app/svg/ios-navigate.svg",
    "revision": "f739c2712bdd35616b784bd4ef250c80"
  },
  {
    "url": "build/app/svg/ios-notifications-off.svg",
    "revision": "6a06cfa6799112f3864388bed6f7c85e"
  },
  {
    "url": "build/app/svg/ios-notifications-outline.svg",
    "revision": "535670f68a6813bb965d22e3ab936f44"
  },
  {
    "url": "build/app/svg/ios-notifications.svg",
    "revision": "c39ec1ccd4de400f96ff404eabba49f2"
  },
  {
    "url": "build/app/svg/ios-nuclear.svg",
    "revision": "3e069dd3b4cd1a9826a68215f7f9899e"
  },
  {
    "url": "build/app/svg/ios-nutrition.svg",
    "revision": "7fb8777da45d1c76945c0c80ce4b4664"
  },
  {
    "url": "build/app/svg/ios-open.svg",
    "revision": "2560c62b484e23bd0ee85872d1f828ed"
  },
  {
    "url": "build/app/svg/ios-options.svg",
    "revision": "21a6d93ee77721406cd219e492992127"
  },
  {
    "url": "build/app/svg/ios-outlet.svg",
    "revision": "7b8548491c3101ebf351c57776b7e34b"
  },
  {
    "url": "build/app/svg/ios-paper-plane.svg",
    "revision": "8e5a6b4c83cfc14d9a84e7d499813985"
  },
  {
    "url": "build/app/svg/ios-paper.svg",
    "revision": "d549c6769cd1d6d65a3a35740f04c68f"
  },
  {
    "url": "build/app/svg/ios-partly-sunny.svg",
    "revision": "a3ff3d09237c5ee94455aafa3297654c"
  },
  {
    "url": "build/app/svg/ios-pause.svg",
    "revision": "58d97c29436abeb5e9bd69c56de26f06"
  },
  {
    "url": "build/app/svg/ios-paw.svg",
    "revision": "6ad20a2c13a30192dcee8bb2697959a6"
  },
  {
    "url": "build/app/svg/ios-people.svg",
    "revision": "5d5e173427d0da36de96c997e5a2ba0f"
  },
  {
    "url": "build/app/svg/ios-person-add.svg",
    "revision": "9b7a219dfe81ebcb46c48d9c40668e64"
  },
  {
    "url": "build/app/svg/ios-person.svg",
    "revision": "4daea7b9fb43320efcc0671e596520b5"
  },
  {
    "url": "build/app/svg/ios-phone-landscape.svg",
    "revision": "edb7a0aab61f88cd26a25d5268e1104d"
  },
  {
    "url": "build/app/svg/ios-phone-portrait.svg",
    "revision": "df7ab2eb3afc596ca4a6f94fdcc85a71"
  },
  {
    "url": "build/app/svg/ios-photos.svg",
    "revision": "299d5c0c5f8c5f6bed63715b94c7038c"
  },
  {
    "url": "build/app/svg/ios-pie.svg",
    "revision": "07587ea24cef2cc7752b5360038a1a37"
  },
  {
    "url": "build/app/svg/ios-pin.svg",
    "revision": "cc6b9d96451b56eda7f93b79346c98e6"
  },
  {
    "url": "build/app/svg/ios-pint.svg",
    "revision": "5ff0a21dd62f7436aa9c68a4462ffce6"
  },
  {
    "url": "build/app/svg/ios-pizza.svg",
    "revision": "e1b0541445bb3f9ad82784a6e08bc792"
  },
  {
    "url": "build/app/svg/ios-planet.svg",
    "revision": "4fd21f9b314c82794e11183845a83fd3"
  },
  {
    "url": "build/app/svg/ios-play-circle.svg",
    "revision": "51e35ded9954c61997b104f90b10148d"
  },
  {
    "url": "build/app/svg/ios-play.svg",
    "revision": "1cdd1b8d00cdcb5c59d42881607c7d25"
  },
  {
    "url": "build/app/svg/ios-podium.svg",
    "revision": "35444e01bd48256cb585e67990745909"
  },
  {
    "url": "build/app/svg/ios-power.svg",
    "revision": "fe60309060cc760e0225e69632107db7"
  },
  {
    "url": "build/app/svg/ios-pricetag.svg",
    "revision": "a80b8a27f6f70e7a89744534543e1799"
  },
  {
    "url": "build/app/svg/ios-pricetags.svg",
    "revision": "fd93312d47359e7ee6fada7c099a4cd4"
  },
  {
    "url": "build/app/svg/ios-print.svg",
    "revision": "4a6774167e358a02be8e3a92f8cc1c1a"
  },
  {
    "url": "build/app/svg/ios-pulse.svg",
    "revision": "ed9df7e53bdf7a2f8e64b84c1fc23f3c"
  },
  {
    "url": "build/app/svg/ios-qr-scanner.svg",
    "revision": "dee768e12b58d82d49068e6a00ce98cc"
  },
  {
    "url": "build/app/svg/ios-quote.svg",
    "revision": "ad581947c72d61e97596365f9bf8c637"
  },
  {
    "url": "build/app/svg/ios-radio-button-off.svg",
    "revision": "0a5f679af25200a6830893a16a4a1e8c"
  },
  {
    "url": "build/app/svg/ios-radio-button-on.svg",
    "revision": "84d6f619ae6431bf6fc9e98e64caa742"
  },
  {
    "url": "build/app/svg/ios-radio.svg",
    "revision": "a8474262b4f13d3ab3c3f0265aa07bf5"
  },
  {
    "url": "build/app/svg/ios-rainy.svg",
    "revision": "37dde442dc5affbea561ee471db32b08"
  },
  {
    "url": "build/app/svg/ios-recording.svg",
    "revision": "c265f295a1cff428164bdf3432ec7e1f"
  },
  {
    "url": "build/app/svg/ios-redo.svg",
    "revision": "b012efa37b13a9dd204c743890f4302c"
  },
  {
    "url": "build/app/svg/ios-refresh-circle.svg",
    "revision": "7f0494dfec1af57735e9b11e588da74b"
  },
  {
    "url": "build/app/svg/ios-refresh.svg",
    "revision": "428b5e9136475d55bb7acfe52ac70af2"
  },
  {
    "url": "build/app/svg/ios-remove-circle-outline.svg",
    "revision": "e545172963d61ddea4ef5718b6e84ffa"
  },
  {
    "url": "build/app/svg/ios-remove-circle.svg",
    "revision": "d6c012a4f7703a37bb019eb6e993e5eb"
  },
  {
    "url": "build/app/svg/ios-remove.svg",
    "revision": "f1869ab7fd31c002b57837f411d06868"
  },
  {
    "url": "build/app/svg/ios-reorder.svg",
    "revision": "2ed71bff58e3a99c71d9814378111dc9"
  },
  {
    "url": "build/app/svg/ios-repeat.svg",
    "revision": "d58257afd33bfb89186df8d25c3974bf"
  },
  {
    "url": "build/app/svg/ios-resize.svg",
    "revision": "f44f2ce3575babf93cb35eb0713c498e"
  },
  {
    "url": "build/app/svg/ios-restaurant.svg",
    "revision": "7bc0d43c362784831d59132647098415"
  },
  {
    "url": "build/app/svg/ios-return-left.svg",
    "revision": "20f93ed64c530b8b9ed2d0f7c0f412f7"
  },
  {
    "url": "build/app/svg/ios-return-right.svg",
    "revision": "7970de06288d4cd6293784421af376ac"
  },
  {
    "url": "build/app/svg/ios-reverse-camera.svg",
    "revision": "84910f20c92b45925085ce7ee10645a7"
  },
  {
    "url": "build/app/svg/ios-rewind.svg",
    "revision": "791cc679932dc2fab8b45ba7d992ccb8"
  },
  {
    "url": "build/app/svg/ios-ribbon.svg",
    "revision": "04d3f464f38e72dd9925c0342ea98673"
  },
  {
    "url": "build/app/svg/ios-rocket.svg",
    "revision": "92cc6ee9293b6a355467176c1b64e095"
  },
  {
    "url": "build/app/svg/ios-rose.svg",
    "revision": "50f82eba7d9685b3f2e0353ffac1b026"
  },
  {
    "url": "build/app/svg/ios-sad.svg",
    "revision": "0a57378630b89e7aaa92280bbe4d24e7"
  },
  {
    "url": "build/app/svg/ios-save.svg",
    "revision": "92b47c8de116b2adddb0559c54055789"
  },
  {
    "url": "build/app/svg/ios-school.svg",
    "revision": "4c5c54dbb8cb9329ea4d1a3130372fd8"
  },
  {
    "url": "build/app/svg/ios-search.svg",
    "revision": "58de3086d267f2f582930c027dffd60e"
  },
  {
    "url": "build/app/svg/ios-send.svg",
    "revision": "1aa8208000b95752375d51b61ae4ebc4"
  },
  {
    "url": "build/app/svg/ios-settings.svg",
    "revision": "975cb155eeb32dd35521d0149902df8e"
  },
  {
    "url": "build/app/svg/ios-share-alt.svg",
    "revision": "0bf667a10540c76942ab501eaba5e38d"
  },
  {
    "url": "build/app/svg/ios-share.svg",
    "revision": "14c727bfa51512be0073ae23adbfb70d"
  },
  {
    "url": "build/app/svg/ios-shirt.svg",
    "revision": "bd6ff6e10bb46a5881d52ab6f06091b5"
  },
  {
    "url": "build/app/svg/ios-shuffle.svg",
    "revision": "76b84ba5907596f6c262e2d7fac867a7"
  },
  {
    "url": "build/app/svg/ios-skip-backward.svg",
    "revision": "533051480121a0fd3fa9df0742c32a93"
  },
  {
    "url": "build/app/svg/ios-skip-forward.svg",
    "revision": "148357ac50cc7856ec907dd60f9beabc"
  },
  {
    "url": "build/app/svg/ios-snow.svg",
    "revision": "e00dc9abc4bfc0c87e6353c47f2d055b"
  },
  {
    "url": "build/app/svg/ios-speedometer.svg",
    "revision": "b111eaafd0b25e6ee93388236497db5c"
  },
  {
    "url": "build/app/svg/ios-square-outline.svg",
    "revision": "9b4eececa768cccc2526350868231be6"
  },
  {
    "url": "build/app/svg/ios-square.svg",
    "revision": "fe7e060b6e1dbe8b184f9f08ec3bde83"
  },
  {
    "url": "build/app/svg/ios-star-half.svg",
    "revision": "6110aa786ac143b7c94dc6817aaea6ba"
  },
  {
    "url": "build/app/svg/ios-star-outline.svg",
    "revision": "7598789f2b0e1c557f1281df46b59671"
  },
  {
    "url": "build/app/svg/ios-star.svg",
    "revision": "4e4ace472f92cc138820a40ed5075515"
  },
  {
    "url": "build/app/svg/ios-stats.svg",
    "revision": "1db8674dec9413b7c6572212e9f814e3"
  },
  {
    "url": "build/app/svg/ios-stopwatch.svg",
    "revision": "7e7e588e28752cd7ad515255496a7aee"
  },
  {
    "url": "build/app/svg/ios-subway.svg",
    "revision": "9717dedff606e58f7266f884d4ec8b1d"
  },
  {
    "url": "build/app/svg/ios-sunny.svg",
    "revision": "4cd31fa46947ab308e80834b15d23f3e"
  },
  {
    "url": "build/app/svg/ios-swap.svg",
    "revision": "e155bcbb60c5530035596888adbadbe5"
  },
  {
    "url": "build/app/svg/ios-switch.svg",
    "revision": "66ef4803b0933507b4bcc0eb8cb053a8"
  },
  {
    "url": "build/app/svg/ios-sync.svg",
    "revision": "1344a6e601ae55de26ab1efe5be0e5c6"
  },
  {
    "url": "build/app/svg/ios-tablet-landscape.svg",
    "revision": "b39f0d6b232f4d9f9dcf3eb6187c0eaa"
  },
  {
    "url": "build/app/svg/ios-tablet-portrait.svg",
    "revision": "f3c810257ffa5e1b0231299f7fe5c629"
  },
  {
    "url": "build/app/svg/ios-tennisball.svg",
    "revision": "32a84626a02ab514bacc4758ab4ef165"
  },
  {
    "url": "build/app/svg/ios-text.svg",
    "revision": "7785a23452f1e7102154b9026952f643"
  },
  {
    "url": "build/app/svg/ios-thermometer.svg",
    "revision": "ab9af4d0d33bc8a2b0d7cffe5be51758"
  },
  {
    "url": "build/app/svg/ios-thumbs-down.svg",
    "revision": "b47e5d011f17b0e63b824ecbdef45240"
  },
  {
    "url": "build/app/svg/ios-thumbs-up.svg",
    "revision": "beedc6b92e76d827375c3db6a3c714c6"
  },
  {
    "url": "build/app/svg/ios-thunderstorm.svg",
    "revision": "b8ef1498a48fc20e985c467de96a377c"
  },
  {
    "url": "build/app/svg/ios-time.svg",
    "revision": "215ddf1ee409257d6c7384100832c061"
  },
  {
    "url": "build/app/svg/ios-timer.svg",
    "revision": "c45debb55caf0ea28e9f57846a4a023d"
  },
  {
    "url": "build/app/svg/ios-today.svg",
    "revision": "005e2e0372d68f758921199705ce2692"
  },
  {
    "url": "build/app/svg/ios-train.svg",
    "revision": "368d148dcd5212c71ec5e2c72dc5764a"
  },
  {
    "url": "build/app/svg/ios-transgender.svg",
    "revision": "db5471e50b033ad3f77fc17e6bf1a973"
  },
  {
    "url": "build/app/svg/ios-trash.svg",
    "revision": "ae5afe7da32e0b75443be434d8580dc3"
  },
  {
    "url": "build/app/svg/ios-trending-down.svg",
    "revision": "6535adf97bed2c2c6d2323d210f7135e"
  },
  {
    "url": "build/app/svg/ios-trending-up.svg",
    "revision": "e1fa18469d8d81647b5def7221845b95"
  },
  {
    "url": "build/app/svg/ios-trophy.svg",
    "revision": "18ebe4958235ac0ab081e47a2a4f036d"
  },
  {
    "url": "build/app/svg/ios-tv.svg",
    "revision": "5a506830a5ba6fb5a4b3592d7c684741"
  },
  {
    "url": "build/app/svg/ios-umbrella.svg",
    "revision": "0003d71091cd49e526942285c5813654"
  },
  {
    "url": "build/app/svg/ios-undo.svg",
    "revision": "953f1d72b1169faf6e461c94955d702f"
  },
  {
    "url": "build/app/svg/ios-unlock.svg",
    "revision": "6d95127258d47b4f70ba505a0347e80b"
  },
  {
    "url": "build/app/svg/ios-videocam.svg",
    "revision": "b51e8684b6e34306852e242d76c01728"
  },
  {
    "url": "build/app/svg/ios-volume-high.svg",
    "revision": "2dc2b656b760a4bf9bae52be2acc17a5"
  },
  {
    "url": "build/app/svg/ios-volume-low.svg",
    "revision": "cde172bfce48bda8929ef53a75a00b98"
  },
  {
    "url": "build/app/svg/ios-volume-mute.svg",
    "revision": "66e5ba218b608319ea65a2f465fc7d7b"
  },
  {
    "url": "build/app/svg/ios-volume-off.svg",
    "revision": "287ed2193008bfafd58ea4ee9aaf1cb6"
  },
  {
    "url": "build/app/svg/ios-walk.svg",
    "revision": "9dc33df596ce5a2203d37e1f54837814"
  },
  {
    "url": "build/app/svg/ios-wallet.svg",
    "revision": "1e51b0c17c1f45d23e78ad85eaf45200"
  },
  {
    "url": "build/app/svg/ios-warning.svg",
    "revision": "c094c1c9f6648359c7998ef3679b490a"
  },
  {
    "url": "build/app/svg/ios-watch.svg",
    "revision": "1c1a661a92a399dc034aa150a4f9f6bd"
  },
  {
    "url": "build/app/svg/ios-water.svg",
    "revision": "81decf06f84f73f97220a9264572b580"
  },
  {
    "url": "build/app/svg/ios-wifi.svg",
    "revision": "85d949598a5ad2ee8faa609caf450122"
  },
  {
    "url": "build/app/svg/ios-wine.svg",
    "revision": "15e329a44fa625a04ac7218e8b819ba8"
  },
  {
    "url": "build/app/svg/ios-woman.svg",
    "revision": "05033c78a68abf3c9398b264a30578ee"
  },
  {
    "url": "build/app/svg/logo-android.svg",
    "revision": "90adbe1d43fc60cd0dddb5784ef8dad5"
  },
  {
    "url": "build/app/svg/logo-angular.svg",
    "revision": "c42a69d0d3c830fc19756b7cfcad5b83"
  },
  {
    "url": "build/app/svg/logo-apple.svg",
    "revision": "b2c62065db8630af8c6b8119929bbdf5"
  },
  {
    "url": "build/app/svg/logo-bitbucket.svg",
    "revision": "4f9455bcbed93700bd739beb33b27ff0"
  },
  {
    "url": "build/app/svg/logo-bitcoin.svg",
    "revision": "4fd2e1b84409e04903a4df1f385247ce"
  },
  {
    "url": "build/app/svg/logo-buffer.svg",
    "revision": "c60ed6c246088e267e7d5e3f2c1909d6"
  },
  {
    "url": "build/app/svg/logo-chrome.svg",
    "revision": "f22827522cf30339d4d5fd6a20cb716f"
  },
  {
    "url": "build/app/svg/logo-closed-captioning.svg",
    "revision": "5a1ebda9793a31a8442a9195b8149503"
  },
  {
    "url": "build/app/svg/logo-codepen.svg",
    "revision": "5bd8e715dcc675bad6d25536fa6d3aed"
  },
  {
    "url": "build/app/svg/logo-css3.svg",
    "revision": "5c44e01d3e2611c14c4c07959335e765"
  },
  {
    "url": "build/app/svg/logo-designernews.svg",
    "revision": "948250b1fd19cb11dd4c9067b13508b0"
  },
  {
    "url": "build/app/svg/logo-dribbble.svg",
    "revision": "d4f5af0d33557ad7e8663403107c2cd9"
  },
  {
    "url": "build/app/svg/logo-dropbox.svg",
    "revision": "3f0350ccc775c035ca27a12c9712714b"
  },
  {
    "url": "build/app/svg/logo-euro.svg",
    "revision": "a064e736d3e98fb9ab63372c95489536"
  },
  {
    "url": "build/app/svg/logo-facebook.svg",
    "revision": "46c0bd59adb9b6ca394698fd6169b290"
  },
  {
    "url": "build/app/svg/logo-flickr.svg",
    "revision": "52aaffb84b1110a30b01937f14e491c3"
  },
  {
    "url": "build/app/svg/logo-foursquare.svg",
    "revision": "da8be88cca5758f64b9c1d7f84c25f4c"
  },
  {
    "url": "build/app/svg/logo-freebsd-devil.svg",
    "revision": "08a0c13bb56d065958f3acfb380ffdca"
  },
  {
    "url": "build/app/svg/logo-game-controller-a.svg",
    "revision": "125017890adc06dc3886ff3e4ac64cbe"
  },
  {
    "url": "build/app/svg/logo-game-controller-b.svg",
    "revision": "17a42e12798ced07697dcdc808f32f8c"
  },
  {
    "url": "build/app/svg/logo-github.svg",
    "revision": "8a1ba32d3c7b69b57d05b74cd65d8bd8"
  },
  {
    "url": "build/app/svg/logo-google.svg",
    "revision": "4af031c17f7b7b42a97a16ec770533d2"
  },
  {
    "url": "build/app/svg/logo-googleplus.svg",
    "revision": "f5e50927c03163e3b7541c6c4c6a6e03"
  },
  {
    "url": "build/app/svg/logo-hackernews.svg",
    "revision": "c92a375d8431b0db600c04ef06545f94"
  },
  {
    "url": "build/app/svg/logo-html5.svg",
    "revision": "0263f883f26af732e1247b14c2f54554"
  },
  {
    "url": "build/app/svg/logo-instagram.svg",
    "revision": "c1dbcbd5a81080b7bc53b98bac4d58bd"
  },
  {
    "url": "build/app/svg/logo-ionic.svg",
    "revision": "b69346c0b3d644fc3423737c759386cd"
  },
  {
    "url": "build/app/svg/logo-ionitron.svg",
    "revision": "057a6c2f4f5702234c930ba5bd190303"
  },
  {
    "url": "build/app/svg/logo-javascript.svg",
    "revision": "bbbb150f373830da06e505b1417fb224"
  },
  {
    "url": "build/app/svg/logo-linkedin.svg",
    "revision": "8dc04bcddc1ee128393621e994aa53e9"
  },
  {
    "url": "build/app/svg/logo-markdown.svg",
    "revision": "ae7fedcb760e58adcdbe3ade91dc5ab7"
  },
  {
    "url": "build/app/svg/logo-model-s.svg",
    "revision": "7d58a5563fe1bcad2ec2eff48e2f4e4a"
  },
  {
    "url": "build/app/svg/logo-no-smoking.svg",
    "revision": "e3c2c91b470b4f2080042a6687f117d2"
  },
  {
    "url": "build/app/svg/logo-nodejs.svg",
    "revision": "5d51536dbeed616207e8a4babbe05f06"
  },
  {
    "url": "build/app/svg/logo-npm.svg",
    "revision": "9eede80bc3235436da06c40d18158fcb"
  },
  {
    "url": "build/app/svg/logo-octocat.svg",
    "revision": "3bdb0ef92d6a5abd55077b07c6f5c9e7"
  },
  {
    "url": "build/app/svg/logo-pinterest.svg",
    "revision": "870c40e99753b17c32a12c219b6673ed"
  },
  {
    "url": "build/app/svg/logo-playstation.svg",
    "revision": "80ff12448b7ff993e6453592601f0151"
  },
  {
    "url": "build/app/svg/logo-polymer.svg",
    "revision": "7d0fc3520324c1ff920f246abe405c09"
  },
  {
    "url": "build/app/svg/logo-python.svg",
    "revision": "7759b8cdcc1f4b9970d5ad2138fca7c3"
  },
  {
    "url": "build/app/svg/logo-reddit.svg",
    "revision": "4ee9a163ce3cef1ee01386acdf962f4f"
  },
  {
    "url": "build/app/svg/logo-rss.svg",
    "revision": "b2f31e4d95a8779581373d0e582df485"
  },
  {
    "url": "build/app/svg/logo-sass.svg",
    "revision": "9796e80bdf604b9bfca6584ca040882c"
  },
  {
    "url": "build/app/svg/logo-skype.svg",
    "revision": "2ff8f84c02ee2da7a34777dd133a896b"
  },
  {
    "url": "build/app/svg/logo-slack.svg",
    "revision": "e88bf77bea55e0983ec683a3c3d5746a"
  },
  {
    "url": "build/app/svg/logo-snapchat.svg",
    "revision": "9c8aede73190ef36696adbd84258827d"
  },
  {
    "url": "build/app/svg/logo-steam.svg",
    "revision": "81116cd26b179b7d9dc6d28208a56331"
  },
  {
    "url": "build/app/svg/logo-tumblr.svg",
    "revision": "a3f62e3341429e766ef43c9742e918ba"
  },
  {
    "url": "build/app/svg/logo-tux.svg",
    "revision": "edfd5dafc7176845016b623c55b4c58c"
  },
  {
    "url": "build/app/svg/logo-twitch.svg",
    "revision": "cd5a611bb5b92548c42f41de823ce35a"
  },
  {
    "url": "build/app/svg/logo-twitter.svg",
    "revision": "3ee3ca382ffca890ed37a4b96d876520"
  },
  {
    "url": "build/app/svg/logo-usd.svg",
    "revision": "8b88ec035f5b719a276b4e0b88788663"
  },
  {
    "url": "build/app/svg/logo-vimeo.svg",
    "revision": "8f0c9d7b567e0f5408790999953be553"
  },
  {
    "url": "build/app/svg/logo-vk.svg",
    "revision": "5d4d40d52c08496d7bca7d4bca4efafa"
  },
  {
    "url": "build/app/svg/logo-whatsapp.svg",
    "revision": "9bb37426825be86581faef88a8e2ccb0"
  },
  {
    "url": "build/app/svg/logo-windows.svg",
    "revision": "45fff7fb6e29a4fca9efc75d5116672c"
  },
  {
    "url": "build/app/svg/logo-wordpress.svg",
    "revision": "f033eb3714042ccb8dc0588d9fcdfda0"
  },
  {
    "url": "build/app/svg/logo-xbox.svg",
    "revision": "d065e077b0db88e12f28d1f1e9c89ad4"
  },
  {
    "url": "build/app/svg/logo-xing.svg",
    "revision": "ba7d9b7922fd255b9ccbd91df20d9ad5"
  },
  {
    "url": "build/app/svg/logo-yahoo.svg",
    "revision": "1738d03e3dc3f0ab6679c002f057223b"
  },
  {
    "url": "build/app/svg/logo-yen.svg",
    "revision": "94a9e893ecc56f42bc953c8bc6f3700e"
  },
  {
    "url": "build/app/svg/logo-youtube.svg",
    "revision": "bad4875ed0a61c355ddb47027475f085"
  },
  {
    "url": "build/app/svg/md-add-circle-outline.svg",
    "revision": "4718a715c260fb27aa5d1a5c5dd4f25c"
  },
  {
    "url": "build/app/svg/md-add-circle.svg",
    "revision": "85393ba81074efe26a46fc4b7b9165ae"
  },
  {
    "url": "build/app/svg/md-add.svg",
    "revision": "9029975fcba35c972376396c12313ecc"
  },
  {
    "url": "build/app/svg/md-airplane.svg",
    "revision": "9f993609826199e0633d2e0324f732c9"
  },
  {
    "url": "build/app/svg/md-alarm.svg",
    "revision": "054fbf090d6c18e5e8cbfa6f750decdb"
  },
  {
    "url": "build/app/svg/md-albums.svg",
    "revision": "f301f66fe04cbd720ced1d2eaaa261a3"
  },
  {
    "url": "build/app/svg/md-alert.svg",
    "revision": "0b9ca738ae164956640e2da2c8795946"
  },
  {
    "url": "build/app/svg/md-american-football.svg",
    "revision": "9667d2506fbe97684f1732ea59b3635b"
  },
  {
    "url": "build/app/svg/md-analytics.svg",
    "revision": "2688d275f453921cdca656941f212ea7"
  },
  {
    "url": "build/app/svg/md-aperture.svg",
    "revision": "189866de0dc883aa32565246793e0bf4"
  },
  {
    "url": "build/app/svg/md-apps.svg",
    "revision": "1bf175220e4119197ce1277a1b44fad1"
  },
  {
    "url": "build/app/svg/md-appstore.svg",
    "revision": "f9892ac336b898a64478d474f5b5cb78"
  },
  {
    "url": "build/app/svg/md-archive.svg",
    "revision": "e337d19639a0ddf73c09f9ac2217e504"
  },
  {
    "url": "build/app/svg/md-arrow-back.svg",
    "revision": "f281d4c64384c6e7efd1fa4097b7d3f7"
  },
  {
    "url": "build/app/svg/md-arrow-down.svg",
    "revision": "347a40057096cc1278d48a4f46e7f8e1"
  },
  {
    "url": "build/app/svg/md-arrow-dropdown-circle.svg",
    "revision": "fc0c4c1efb6d0586c2c27020943f06a1"
  },
  {
    "url": "build/app/svg/md-arrow-dropdown.svg",
    "revision": "b21e90ec8db8032cced62a87578606f6"
  },
  {
    "url": "build/app/svg/md-arrow-dropleft-circle.svg",
    "revision": "34ef151528d744f29f084810738ea826"
  },
  {
    "url": "build/app/svg/md-arrow-dropleft.svg",
    "revision": "4ffa51aeb0e75db0a4e3dbfcf50c6f7e"
  },
  {
    "url": "build/app/svg/md-arrow-dropright-circle.svg",
    "revision": "c3db11891317dff5ad2c2ed4e1c1edd4"
  },
  {
    "url": "build/app/svg/md-arrow-dropright.svg",
    "revision": "7666daaa1131424248073bf3b7d8ba76"
  },
  {
    "url": "build/app/svg/md-arrow-dropup-circle.svg",
    "revision": "43c410cff8e20d5d766d62e999339cc5"
  },
  {
    "url": "build/app/svg/md-arrow-dropup.svg",
    "revision": "bd452c7b264dc94ca175fee3af7766b8"
  },
  {
    "url": "build/app/svg/md-arrow-forward.svg",
    "revision": "962cbfb7fedc5b9a533f3677d8056b41"
  },
  {
    "url": "build/app/svg/md-arrow-round-back.svg",
    "revision": "99fa174cd8667e43b64d82dede27acde"
  },
  {
    "url": "build/app/svg/md-arrow-round-down.svg",
    "revision": "900a59b80c5dadc5786607ddf6b5c251"
  },
  {
    "url": "build/app/svg/md-arrow-round-forward.svg",
    "revision": "90d74733ca89f01279e10f4a4af9ed98"
  },
  {
    "url": "build/app/svg/md-arrow-round-up.svg",
    "revision": "a52337f9ea408366831dfc6b2e0b7cd8"
  },
  {
    "url": "build/app/svg/md-arrow-up.svg",
    "revision": "46ca744e25ed9e69d234eaf0ec4d7b82"
  },
  {
    "url": "build/app/svg/md-at.svg",
    "revision": "6aaca585a22b8df9de10fa1dd0eb8170"
  },
  {
    "url": "build/app/svg/md-attach.svg",
    "revision": "fa27bcf0e95d3d32d448510063dfa866"
  },
  {
    "url": "build/app/svg/md-backspace.svg",
    "revision": "78d2783941e69f7ae120edd8434d274a"
  },
  {
    "url": "build/app/svg/md-barcode.svg",
    "revision": "8973283eb37fba336ec460420fae4518"
  },
  {
    "url": "build/app/svg/md-baseball.svg",
    "revision": "15e7aaf4dbcb93d614187c9d4d6f06d4"
  },
  {
    "url": "build/app/svg/md-basket.svg",
    "revision": "609963fa037a976991ae4dd4f32afc93"
  },
  {
    "url": "build/app/svg/md-basketball.svg",
    "revision": "f0bd29bb2dfc7391316af6c563bfd67f"
  },
  {
    "url": "build/app/svg/md-battery-charging.svg",
    "revision": "71537640f96797ad01b62bade961bddf"
  },
  {
    "url": "build/app/svg/md-battery-dead.svg",
    "revision": "508de4ebef41368622f25e6924e98c8d"
  },
  {
    "url": "build/app/svg/md-battery-full.svg",
    "revision": "da14b321da824f4f110960387298f615"
  },
  {
    "url": "build/app/svg/md-beaker.svg",
    "revision": "f8edfa3716e00e08f8c211f64af6487b"
  },
  {
    "url": "build/app/svg/md-bed.svg",
    "revision": "25813fa67960663664dd7a94cd12e612"
  },
  {
    "url": "build/app/svg/md-beer.svg",
    "revision": "ffbef646ac3ec3b99af7e735f9ce4fad"
  },
  {
    "url": "build/app/svg/md-bicycle.svg",
    "revision": "c93a92ab80dad6471449ef567297dc4d"
  },
  {
    "url": "build/app/svg/md-bluetooth.svg",
    "revision": "4bd9a202acdddb2db5d1bf31f9b30f8a"
  },
  {
    "url": "build/app/svg/md-boat.svg",
    "revision": "043fbf8d9b1a6daaf30d4633e6c2c94b"
  },
  {
    "url": "build/app/svg/md-body.svg",
    "revision": "2bd3674a20535f35c5f03ec0879b26c5"
  },
  {
    "url": "build/app/svg/md-bonfire.svg",
    "revision": "fe5a813443f4be66959f676e364c5b7f"
  },
  {
    "url": "build/app/svg/md-book.svg",
    "revision": "11d6816c1e0413ef3ba7b478b6300d93"
  },
  {
    "url": "build/app/svg/md-bookmark.svg",
    "revision": "4079d6ccf132c447990abb37dd5bb351"
  },
  {
    "url": "build/app/svg/md-bookmarks.svg",
    "revision": "c2172fa0f5f55857a4296284f12452da"
  },
  {
    "url": "build/app/svg/md-bowtie.svg",
    "revision": "9a611b96b6cb0491446bb5b10ffbd527"
  },
  {
    "url": "build/app/svg/md-briefcase.svg",
    "revision": "bca8927d47a572d091adde6a34101051"
  },
  {
    "url": "build/app/svg/md-browsers.svg",
    "revision": "5b3027fe5830552d297c518f0474b18b"
  },
  {
    "url": "build/app/svg/md-brush.svg",
    "revision": "3bdbc645be6ed4c5dec9b7577efd51f5"
  },
  {
    "url": "build/app/svg/md-bug.svg",
    "revision": "a7d3542abfa52c9004a33f3d6b018002"
  },
  {
    "url": "build/app/svg/md-build.svg",
    "revision": "b360dc24090b494e13fa1109d1f54cba"
  },
  {
    "url": "build/app/svg/md-bulb.svg",
    "revision": "e9e755f4173db4160d9ea6071e2eff3d"
  },
  {
    "url": "build/app/svg/md-bus.svg",
    "revision": "52a105e40643802fb54250592bd2c982"
  },
  {
    "url": "build/app/svg/md-business.svg",
    "revision": "6b54fc901d33ef0d04deb83fcc626e7d"
  },
  {
    "url": "build/app/svg/md-cafe.svg",
    "revision": "976350ecf514a412324afe168eb7d94b"
  },
  {
    "url": "build/app/svg/md-calculator.svg",
    "revision": "c6ca35a8a07ec3e928d8a1e1df3dc3ad"
  },
  {
    "url": "build/app/svg/md-calendar.svg",
    "revision": "00ef4085a985384c3092fa0a5be6d6e5"
  },
  {
    "url": "build/app/svg/md-call.svg",
    "revision": "719ec3ec9151bed1084ec8b76338e9f3"
  },
  {
    "url": "build/app/svg/md-camera.svg",
    "revision": "464fa575a82e1c30137559435162d297"
  },
  {
    "url": "build/app/svg/md-car.svg",
    "revision": "c9f0a754476881b6aab74f2485652a80"
  },
  {
    "url": "build/app/svg/md-card.svg",
    "revision": "37ae7a5d6c38dc2bfe9f1c3230d5a743"
  },
  {
    "url": "build/app/svg/md-cart.svg",
    "revision": "40fe4e3a010b4c30e2fb2ec269d4d2c7"
  },
  {
    "url": "build/app/svg/md-cash.svg",
    "revision": "51d067e099b421e43d376a1678260db3"
  },
  {
    "url": "build/app/svg/md-cellular.svg",
    "revision": "eb6f210ece658d1b2adae5ecdac6d79b"
  },
  {
    "url": "build/app/svg/md-chatboxes.svg",
    "revision": "91b10fb50ea37c7069ecf2fcdd93f5f0"
  },
  {
    "url": "build/app/svg/md-chatbubbles.svg",
    "revision": "c391d90d6c74cb42ac34470660a1edc8"
  },
  {
    "url": "build/app/svg/md-checkbox-outline.svg",
    "revision": "c7502861bd4abac401955102e834c39f"
  },
  {
    "url": "build/app/svg/md-checkbox.svg",
    "revision": "88cf0db199d12661c85b7c9e4623d893"
  },
  {
    "url": "build/app/svg/md-checkmark-circle-outline.svg",
    "revision": "326664188389be9fc497c8bb3e994995"
  },
  {
    "url": "build/app/svg/md-checkmark-circle.svg",
    "revision": "a49f05e9e01777c6030bce337a75fdf0"
  },
  {
    "url": "build/app/svg/md-checkmark.svg",
    "revision": "984edddf649952c69f697fce0ac592f9"
  },
  {
    "url": "build/app/svg/md-clipboard.svg",
    "revision": "8b029cfd9d708aa62bfe961fcd2e1c0b"
  },
  {
    "url": "build/app/svg/md-clock.svg",
    "revision": "413c314ab9b1c04f9b9baa824d69fe7e"
  },
  {
    "url": "build/app/svg/md-close-circle-outline.svg",
    "revision": "629b03c85cc813439787c3734886c453"
  },
  {
    "url": "build/app/svg/md-close-circle.svg",
    "revision": "5ecf73b45141861ff124fa3e7fd5c98d"
  },
  {
    "url": "build/app/svg/md-close.svg",
    "revision": "e56f70f89faba013eb18243dfb94ef53"
  },
  {
    "url": "build/app/svg/md-cloud-circle.svg",
    "revision": "60e4a811e7260ce88628d119201b61f5"
  },
  {
    "url": "build/app/svg/md-cloud-done.svg",
    "revision": "ebcd53f3c4f421917adda6b72900ccda"
  },
  {
    "url": "build/app/svg/md-cloud-download.svg",
    "revision": "47419780f6f7c4aed5d524ff2076d2e1"
  },
  {
    "url": "build/app/svg/md-cloud-outline.svg",
    "revision": "76d2f12b7cd633a93996d58936916880"
  },
  {
    "url": "build/app/svg/md-cloud-upload.svg",
    "revision": "0c07424823e51431a676e0ae922adc5e"
  },
  {
    "url": "build/app/svg/md-cloud.svg",
    "revision": "985f537b7bf7673a8b22383c1d3f39ff"
  },
  {
    "url": "build/app/svg/md-cloudy-night.svg",
    "revision": "4cc78e9277bd99d1ef28ada36d68b470"
  },
  {
    "url": "build/app/svg/md-cloudy.svg",
    "revision": "a7527ae4c54e64e64f63b41e1ba2dc68"
  },
  {
    "url": "build/app/svg/md-code-download.svg",
    "revision": "5845b2cdaa274ac9de15e7013d694e79"
  },
  {
    "url": "build/app/svg/md-code-working.svg",
    "revision": "2b0e1bb37cc79194720a7785930099d8"
  },
  {
    "url": "build/app/svg/md-code.svg",
    "revision": "6313a2f3e4df52f0c7d277ac1ae47bbb"
  },
  {
    "url": "build/app/svg/md-cog.svg",
    "revision": "c952e3bb335100cc57b027262f69812f"
  },
  {
    "url": "build/app/svg/md-color-fill.svg",
    "revision": "280e2ce1d61d7ae4eca6417b0ad5262a"
  },
  {
    "url": "build/app/svg/md-color-filter.svg",
    "revision": "7058497fb6edd904df451c53b18f1c8a"
  },
  {
    "url": "build/app/svg/md-color-palette.svg",
    "revision": "019a16f4b2ca052451179c80816eafae"
  },
  {
    "url": "build/app/svg/md-color-wand.svg",
    "revision": "cc9341d051d21184a1d91d3d8888e10d"
  },
  {
    "url": "build/app/svg/md-compass.svg",
    "revision": "eb8092afc05e1640785b3018f867add4"
  },
  {
    "url": "build/app/svg/md-construct.svg",
    "revision": "1aacb946da683c43227a9b2ce6f24706"
  },
  {
    "url": "build/app/svg/md-contact.svg",
    "revision": "493ed010b9482d01f35c9b17a6666d4e"
  },
  {
    "url": "build/app/svg/md-contacts.svg",
    "revision": "2146769b4cbcf0eb5d1272ac749985cd"
  },
  {
    "url": "build/app/svg/md-contract.svg",
    "revision": "488ef4f4f693f2c27bc51c573b276130"
  },
  {
    "url": "build/app/svg/md-contrast.svg",
    "revision": "7f808d2fdf5240b84369987d1a89598a"
  },
  {
    "url": "build/app/svg/md-copy.svg",
    "revision": "1fde2908bc5b0ab2edd3f147258b7cc9"
  },
  {
    "url": "build/app/svg/md-create.svg",
    "revision": "d93204ce3d393b61665298db29db4e6a"
  },
  {
    "url": "build/app/svg/md-crop.svg",
    "revision": "988702a3b49d67eafd8cdf88b56c668f"
  },
  {
    "url": "build/app/svg/md-cube.svg",
    "revision": "9e89bea7d1b3612a0d01aee731411fbf"
  },
  {
    "url": "build/app/svg/md-cut.svg",
    "revision": "126dd5421c22ef0cc7cf105ffd36c0b7"
  },
  {
    "url": "build/app/svg/md-desktop.svg",
    "revision": "8e16a89401feb9e52f92edd723b343f2"
  },
  {
    "url": "build/app/svg/md-disc.svg",
    "revision": "2ed012e493e16eee5388209736ecc3e7"
  },
  {
    "url": "build/app/svg/md-document.svg",
    "revision": "9d31a249244d249bc4f3eab7028b3ba4"
  },
  {
    "url": "build/app/svg/md-done-all.svg",
    "revision": "0657748a01ea034bb8f33ac20095a83a"
  },
  {
    "url": "build/app/svg/md-download.svg",
    "revision": "8e10a5c8b57464a175242f98033d6a77"
  },
  {
    "url": "build/app/svg/md-easel.svg",
    "revision": "9f884ca9a0210a196f8048fd5e169297"
  },
  {
    "url": "build/app/svg/md-egg.svg",
    "revision": "d883660a1c8681705583d918e367837d"
  },
  {
    "url": "build/app/svg/md-exit.svg",
    "revision": "b2136cd65cace69039c88b6b6718e5d0"
  },
  {
    "url": "build/app/svg/md-expand.svg",
    "revision": "82e1cfaeb0d992aa80599935097f4617"
  },
  {
    "url": "build/app/svg/md-eye-off.svg",
    "revision": "4227037ae1f358fed1ffb780ffad38f6"
  },
  {
    "url": "build/app/svg/md-eye.svg",
    "revision": "26d4b395d17d49c27605333ebfb96322"
  },
  {
    "url": "build/app/svg/md-fastforward.svg",
    "revision": "4b948df75957c7ba06e5bd4dfcf081bc"
  },
  {
    "url": "build/app/svg/md-female.svg",
    "revision": "01eebeb5bdd888787f19b282a7d14b8d"
  },
  {
    "url": "build/app/svg/md-filing.svg",
    "revision": "e019d3c26f8ac09d472d584d20e67a50"
  },
  {
    "url": "build/app/svg/md-film.svg",
    "revision": "8c95b4112f3bf944fb37912f13f939da"
  },
  {
    "url": "build/app/svg/md-finger-print.svg",
    "revision": "2d6d65762f04ae27123c1d34a7cadb3c"
  },
  {
    "url": "build/app/svg/md-fitness.svg",
    "revision": "b22471b4c695c859567dc1ef84c6ba32"
  },
  {
    "url": "build/app/svg/md-flag.svg",
    "revision": "87ab61b1913e3fc4f623bc8f5507e366"
  },
  {
    "url": "build/app/svg/md-flame.svg",
    "revision": "64a3f009d601f567b467a0fadabfb820"
  },
  {
    "url": "build/app/svg/md-flash-off.svg",
    "revision": "0f8afb6492b4ceeae6f4ff35ddf0fa06"
  },
  {
    "url": "build/app/svg/md-flash.svg",
    "revision": "6566bae51b97c366362e6fdd17249897"
  },
  {
    "url": "build/app/svg/md-flashlight.svg",
    "revision": "473a1f65a359efe3db7fb2102cee264c"
  },
  {
    "url": "build/app/svg/md-flask.svg",
    "revision": "e43b1120640843e722d31256f52be5bf"
  },
  {
    "url": "build/app/svg/md-flower.svg",
    "revision": "e226ba32fba1191588c75b119ce5ef08"
  },
  {
    "url": "build/app/svg/md-folder-open.svg",
    "revision": "ba66422afe508f9bd25a243759c0b298"
  },
  {
    "url": "build/app/svg/md-folder.svg",
    "revision": "d95b089777bd56c578dfc889b0dd38b2"
  },
  {
    "url": "build/app/svg/md-football.svg",
    "revision": "f661b75c5b2ac9f789544e6564d17cb7"
  },
  {
    "url": "build/app/svg/md-funnel.svg",
    "revision": "6315ebed62eb24afaf34733b60a6a413"
  },
  {
    "url": "build/app/svg/md-gift.svg",
    "revision": "de8beff106533db7a7ae535c9b1cbc10"
  },
  {
    "url": "build/app/svg/md-git-branch.svg",
    "revision": "b88659c382f0c33b92346a3b592f9c32"
  },
  {
    "url": "build/app/svg/md-git-commit.svg",
    "revision": "7c36d11c426850ee8d75221ce75c6a7b"
  },
  {
    "url": "build/app/svg/md-git-compare.svg",
    "revision": "553bbeceb55c563af35cc2c7fea72e83"
  },
  {
    "url": "build/app/svg/md-git-merge.svg",
    "revision": "71f5d12f2591e34710c9f46887f9631c"
  },
  {
    "url": "build/app/svg/md-git-network.svg",
    "revision": "7e6b60718104b5add2db0add2343bac7"
  },
  {
    "url": "build/app/svg/md-git-pull-request.svg",
    "revision": "4a5595be107458b27db518fa3e402c11"
  },
  {
    "url": "build/app/svg/md-glasses.svg",
    "revision": "af2072163f819f3db5629bdbddf59e31"
  },
  {
    "url": "build/app/svg/md-globe.svg",
    "revision": "a71da31cb6b3126602072330c3a8a428"
  },
  {
    "url": "build/app/svg/md-grid.svg",
    "revision": "4199c4aaf500dc4aa52b0c87c941c249"
  },
  {
    "url": "build/app/svg/md-hammer.svg",
    "revision": "4b5f5a3f36f1faa979aafbeaa6d9ab33"
  },
  {
    "url": "build/app/svg/md-hand.svg",
    "revision": "3735622c86823e481b931526f2e7aa20"
  },
  {
    "url": "build/app/svg/md-happy.svg",
    "revision": "1766c2c3630e7e638db255b8a6bb147a"
  },
  {
    "url": "build/app/svg/md-headset.svg",
    "revision": "9f82757708994ddfeb5b5ba26865cf81"
  },
  {
    "url": "build/app/svg/md-heart-dislike.svg",
    "revision": "aaeb7a8ffd26c9d6e2edccfdd8ff9f3e"
  },
  {
    "url": "build/app/svg/md-heart-empty.svg",
    "revision": "8b8cfd844d9bf8176a8f4689d9b80726"
  },
  {
    "url": "build/app/svg/md-heart-half.svg",
    "revision": "f6111402b0dee1d58e4066a3d719f3ec"
  },
  {
    "url": "build/app/svg/md-heart.svg",
    "revision": "cf814990e60b7e8da93f8a33aa46d0f8"
  },
  {
    "url": "build/app/svg/md-help-buoy.svg",
    "revision": "3748193b1b82886223be34cfbf613660"
  },
  {
    "url": "build/app/svg/md-help-circle-outline.svg",
    "revision": "ac7620f1bf69d98b45965faa203ba336"
  },
  {
    "url": "build/app/svg/md-help-circle.svg",
    "revision": "4c8033641938e20dba1a4b24a1be9c85"
  },
  {
    "url": "build/app/svg/md-help.svg",
    "revision": "327916e35f4127b74a2b4ddf15327bf2"
  },
  {
    "url": "build/app/svg/md-home.svg",
    "revision": "78d6e460cb5d3888b1f440f47cad8ff9"
  },
  {
    "url": "build/app/svg/md-hourglass.svg",
    "revision": "6905b8dd9914e49643051182dcb38dfe"
  },
  {
    "url": "build/app/svg/md-ice-cream.svg",
    "revision": "3f2b94c32416c226048eddd047be279d"
  },
  {
    "url": "build/app/svg/md-image.svg",
    "revision": "a0c49aaef1878c110cc2398ddb5e0c29"
  },
  {
    "url": "build/app/svg/md-images.svg",
    "revision": "16c79cf35d41d5059f758f7e6f80ff6c"
  },
  {
    "url": "build/app/svg/md-infinite.svg",
    "revision": "23fe6eb070fe9ddcfbf7a7e8d81c2dc8"
  },
  {
    "url": "build/app/svg/md-information-circle-outline.svg",
    "revision": "d2e3e7f99c12e62f70dd6248bfe5fe9a"
  },
  {
    "url": "build/app/svg/md-information-circle.svg",
    "revision": "8e5cce1725be4a020357cd9cf12b33b7"
  },
  {
    "url": "build/app/svg/md-information.svg",
    "revision": "499bd6bc8db64a44d01c6b5724965235"
  },
  {
    "url": "build/app/svg/md-jet.svg",
    "revision": "4af3957c690ae08dcb818838a72f11e3"
  },
  {
    "url": "build/app/svg/md-journal.svg",
    "revision": "ad25bd3accf2c0266f81ed66d6f49c29"
  },
  {
    "url": "build/app/svg/md-key.svg",
    "revision": "6d57f1193a70b0c4f3f7a5fa3596a529"
  },
  {
    "url": "build/app/svg/md-keypad.svg",
    "revision": "7afd336cdc35206b6a4eb9d08cf98cd0"
  },
  {
    "url": "build/app/svg/md-laptop.svg",
    "revision": "085b1d768f9eefbc7410a3d402635c6a"
  },
  {
    "url": "build/app/svg/md-leaf.svg",
    "revision": "8654cc464e229feb1d7da203b6719c15"
  },
  {
    "url": "build/app/svg/md-link.svg",
    "revision": "39fd3a56a36a253fe0b0611f8bc3b471"
  },
  {
    "url": "build/app/svg/md-list-box.svg",
    "revision": "78dd32829ce6bd94f1f09f6f6d04761d"
  },
  {
    "url": "build/app/svg/md-list.svg",
    "revision": "250f9d1904c556a57d4d4b36dddb76ec"
  },
  {
    "url": "build/app/svg/md-locate.svg",
    "revision": "b82309512533ee7e77f5306078022dba"
  },
  {
    "url": "build/app/svg/md-lock.svg",
    "revision": "602bbf9869e9caadb39acd39f21cef12"
  },
  {
    "url": "build/app/svg/md-log-in.svg",
    "revision": "44896c0a2c8a647ee03cfcbab8001329"
  },
  {
    "url": "build/app/svg/md-log-out.svg",
    "revision": "2deb7d54fb85859a6292f65c7b5e6631"
  },
  {
    "url": "build/app/svg/md-magnet.svg",
    "revision": "a4e314445ebfde50049483f7e504ed9c"
  },
  {
    "url": "build/app/svg/md-mail-open.svg",
    "revision": "0da036c25a7e5a08608770a9785a8f24"
  },
  {
    "url": "build/app/svg/md-mail-unread.svg",
    "revision": "b20afe46b7c315e5c90e31ee36b9f7ad"
  },
  {
    "url": "build/app/svg/md-mail.svg",
    "revision": "cdb6a2068b7747d27bed242e36714618"
  },
  {
    "url": "build/app/svg/md-male.svg",
    "revision": "6cb30eeebbbbaf62a80f825b04d685e8"
  },
  {
    "url": "build/app/svg/md-man.svg",
    "revision": "b5efbf6073f7fd59fe369e6ad8111578"
  },
  {
    "url": "build/app/svg/md-map.svg",
    "revision": "3cb1e3cfa740a32e46112941997d6824"
  },
  {
    "url": "build/app/svg/md-medal.svg",
    "revision": "9a281aab18f5a66cee5cc21098352b17"
  },
  {
    "url": "build/app/svg/md-medical.svg",
    "revision": "3a0b8f72d48b1a4de39b2bbcbf7cdb6f"
  },
  {
    "url": "build/app/svg/md-medkit.svg",
    "revision": "8c82a5706f24721531ab50fbb92690e2"
  },
  {
    "url": "build/app/svg/md-megaphone.svg",
    "revision": "f1694d823b0b26c982ab665bc7a96664"
  },
  {
    "url": "build/app/svg/md-menu.svg",
    "revision": "4e10f85b6eb5c93687bf7bdf0557e8e8"
  },
  {
    "url": "build/app/svg/md-mic-off.svg",
    "revision": "befd36158252c12c0963b4e7bde02026"
  },
  {
    "url": "build/app/svg/md-mic.svg",
    "revision": "8667f3589b67a1d9c3b1384bb343d19c"
  },
  {
    "url": "build/app/svg/md-microphone.svg",
    "revision": "cba83723c1980298dea9f6b18e30b54d"
  },
  {
    "url": "build/app/svg/md-moon.svg",
    "revision": "99ab2f960fdaacc76cd6e5ec837fcb41"
  },
  {
    "url": "build/app/svg/md-more.svg",
    "revision": "9c0bd80212ce673baae08790a484457e"
  },
  {
    "url": "build/app/svg/md-move.svg",
    "revision": "994962c528c6d6a20c6b4bedecd7357a"
  },
  {
    "url": "build/app/svg/md-musical-note.svg",
    "revision": "acd6f29a8c515f6bd68d0b355e53e778"
  },
  {
    "url": "build/app/svg/md-musical-notes.svg",
    "revision": "c207ad354c533db6967e994959383f04"
  },
  {
    "url": "build/app/svg/md-navigate.svg",
    "revision": "21ea820749e9ba11c29b668601542df8"
  },
  {
    "url": "build/app/svg/md-notifications-off.svg",
    "revision": "fa53fc0ed0d74a8f4f67d8d29f7c9158"
  },
  {
    "url": "build/app/svg/md-notifications-outline.svg",
    "revision": "8c92d157997b6c4b232adef93f659c96"
  },
  {
    "url": "build/app/svg/md-notifications.svg",
    "revision": "bab1701f163c2ea5e87cad56cf7177c8"
  },
  {
    "url": "build/app/svg/md-nuclear.svg",
    "revision": "486b196acea740952ae46b41428c42ea"
  },
  {
    "url": "build/app/svg/md-nutrition.svg",
    "revision": "189ce36cae4104de7e93357cdf91c3b3"
  },
  {
    "url": "build/app/svg/md-open.svg",
    "revision": "39dc2eb53fb4f2799135bc7b1e84cf89"
  },
  {
    "url": "build/app/svg/md-options.svg",
    "revision": "72fe8b50600191ea292df63511d16296"
  },
  {
    "url": "build/app/svg/md-outlet.svg",
    "revision": "58d94b5d994e09c73dd9ed1b470f073b"
  },
  {
    "url": "build/app/svg/md-paper-plane.svg",
    "revision": "d4ae298a1525b3ca4c0ebf02857b9097"
  },
  {
    "url": "build/app/svg/md-paper.svg",
    "revision": "9aa1466b4a90bd8abc04888b8c975856"
  },
  {
    "url": "build/app/svg/md-partly-sunny.svg",
    "revision": "018889ccb5dcf8934437a718d9033eb4"
  },
  {
    "url": "build/app/svg/md-pause.svg",
    "revision": "ef275f0a4ca69abd2cbdd4053adf8cff"
  },
  {
    "url": "build/app/svg/md-paw.svg",
    "revision": "3fc1ee0933f6f0da0642eb5fa49ddb32"
  },
  {
    "url": "build/app/svg/md-people.svg",
    "revision": "7e072eb3be5766c519fcf5f487c4df81"
  },
  {
    "url": "build/app/svg/md-person-add.svg",
    "revision": "12ba58a7261e649cee363012ca72f38b"
  },
  {
    "url": "build/app/svg/md-person.svg",
    "revision": "d5374614cae28ef5a18a80c2f29dd21f"
  },
  {
    "url": "build/app/svg/md-phone-landscape.svg",
    "revision": "dd0357e51b7ddb5313a7d59f643b67b7"
  },
  {
    "url": "build/app/svg/md-phone-portrait.svg",
    "revision": "cc2526502c311a158e3d4dc4deb01bea"
  },
  {
    "url": "build/app/svg/md-photos.svg",
    "revision": "5e68ad9b9afa50556b268469813f1dd7"
  },
  {
    "url": "build/app/svg/md-pie.svg",
    "revision": "f47cb3cb00439bfba31ccb15358ed5e6"
  },
  {
    "url": "build/app/svg/md-pin.svg",
    "revision": "a3f117f086ab9f1a07ae652911ac2645"
  },
  {
    "url": "build/app/svg/md-pint.svg",
    "revision": "0e585f3302b15c7ad03f1aba24f52a57"
  },
  {
    "url": "build/app/svg/md-pizza.svg",
    "revision": "f959f98fac52821339aafceb5ea2dd9e"
  },
  {
    "url": "build/app/svg/md-planet.svg",
    "revision": "8dba5e773799386e44647231bf940855"
  },
  {
    "url": "build/app/svg/md-play-circle.svg",
    "revision": "3c1d0b1ae213abad45b40e3c28250bab"
  },
  {
    "url": "build/app/svg/md-play.svg",
    "revision": "81c9de128ebdf12b70656caa19e0c592"
  },
  {
    "url": "build/app/svg/md-podium.svg",
    "revision": "87a7b8d2e77e2cfb1c08483c11a0d039"
  },
  {
    "url": "build/app/svg/md-power.svg",
    "revision": "2ab627e800c35f11c431b7fbf7a4f1c5"
  },
  {
    "url": "build/app/svg/md-pricetag.svg",
    "revision": "2db7c006142fba046fcabc6469010172"
  },
  {
    "url": "build/app/svg/md-pricetags.svg",
    "revision": "ae695e8754e64f15b5b6501ed06cd3af"
  },
  {
    "url": "build/app/svg/md-print.svg",
    "revision": "3c09a2bb3e7dd4d277f41a2229fa8864"
  },
  {
    "url": "build/app/svg/md-pulse.svg",
    "revision": "70a5f9c1dbc6168d705323a78c94994b"
  },
  {
    "url": "build/app/svg/md-qr-scanner.svg",
    "revision": "f2671f20f69bc0e4953aff636474b1d0"
  },
  {
    "url": "build/app/svg/md-quote.svg",
    "revision": "6127684735169e01eb287a5bff8e28e9"
  },
  {
    "url": "build/app/svg/md-radio-button-off.svg",
    "revision": "4b712f4fd564761197599e819a30c994"
  },
  {
    "url": "build/app/svg/md-radio-button-on.svg",
    "revision": "25108f0173f1193b2b6325241aee7598"
  },
  {
    "url": "build/app/svg/md-radio.svg",
    "revision": "f85bf3de30e985918c4353dab6858715"
  },
  {
    "url": "build/app/svg/md-rainy.svg",
    "revision": "2121352c4c61c828ab1238e59f3d9d65"
  },
  {
    "url": "build/app/svg/md-recording.svg",
    "revision": "6623a1303d029a386cb95ffeda60e064"
  },
  {
    "url": "build/app/svg/md-redo.svg",
    "revision": "d18a7df958fb128a57fdc4794b6a0819"
  },
  {
    "url": "build/app/svg/md-refresh-circle.svg",
    "revision": "bf1d0ba523921c7e852fb574b3b1d0d6"
  },
  {
    "url": "build/app/svg/md-refresh.svg",
    "revision": "8cde2f6b67a62e1ff8a583da745519f3"
  },
  {
    "url": "build/app/svg/md-remove-circle-outline.svg",
    "revision": "18bdbaa32576c126f6c740a36e39b504"
  },
  {
    "url": "build/app/svg/md-remove-circle.svg",
    "revision": "173207eec1045809681fa252ae1a47f9"
  },
  {
    "url": "build/app/svg/md-remove.svg",
    "revision": "5aaa411554c5dc87a29ccc9b442141eb"
  },
  {
    "url": "build/app/svg/md-reorder.svg",
    "revision": "8a05dea1647609a035e335d116c1c22a"
  },
  {
    "url": "build/app/svg/md-repeat.svg",
    "revision": "2f28dffe698c2b64924d6444de65aca5"
  },
  {
    "url": "build/app/svg/md-resize.svg",
    "revision": "dc9eb61db7eced95c8ab9fcc0c8890b8"
  },
  {
    "url": "build/app/svg/md-restaurant.svg",
    "revision": "504a2e8ac0aa66edf3b551f1bdea9167"
  },
  {
    "url": "build/app/svg/md-return-left.svg",
    "revision": "34b30ae4b17c7fcd0ac79449c84dbcc2"
  },
  {
    "url": "build/app/svg/md-return-right.svg",
    "revision": "a4b78bd3db6cc61c3d292aa3fb4a3ecd"
  },
  {
    "url": "build/app/svg/md-reverse-camera.svg",
    "revision": "5f7a59556e40720d34d77c10dccaf643"
  },
  {
    "url": "build/app/svg/md-rewind.svg",
    "revision": "5a79fae9d21adcf0e1548ff1aae90f90"
  },
  {
    "url": "build/app/svg/md-ribbon.svg",
    "revision": "42633c14b274b7057a26423ee488c7cf"
  },
  {
    "url": "build/app/svg/md-rocket.svg",
    "revision": "bf5d2a060b052132ee4e12433d6fc769"
  },
  {
    "url": "build/app/svg/md-rose.svg",
    "revision": "7476d50e3a2118a45e8f1f2b5a0b8c22"
  },
  {
    "url": "build/app/svg/md-sad.svg",
    "revision": "a457c526ff40e2b143db2177af0c4bd9"
  },
  {
    "url": "build/app/svg/md-save.svg",
    "revision": "f9c8c68be9811cd40e83705984819c84"
  },
  {
    "url": "build/app/svg/md-school.svg",
    "revision": "d3f10a7643a7b3f45f4a95be0993b617"
  },
  {
    "url": "build/app/svg/md-search.svg",
    "revision": "ca1a8ecaf1fbb7d19f3649d04ffc3c53"
  },
  {
    "url": "build/app/svg/md-send.svg",
    "revision": "dd47517fd2e310661df1338e6b13cc4d"
  },
  {
    "url": "build/app/svg/md-settings.svg",
    "revision": "4eabf90d7b4ab30a519eb2df23d45a2b"
  },
  {
    "url": "build/app/svg/md-share-alt.svg",
    "revision": "aed8ca4138d09baa12e0334114d7d6bb"
  },
  {
    "url": "build/app/svg/md-share.svg",
    "revision": "98db64c449b712e0a6950dd40480e561"
  },
  {
    "url": "build/app/svg/md-shirt.svg",
    "revision": "0fa56aeefd58accd4eaf67057f0a47e5"
  },
  {
    "url": "build/app/svg/md-shuffle.svg",
    "revision": "3e2996492200df79a27f67f71e22d770"
  },
  {
    "url": "build/app/svg/md-skip-backward.svg",
    "revision": "51eb1462ac49b3cbe640ae4ca3f524fd"
  },
  {
    "url": "build/app/svg/md-skip-forward.svg",
    "revision": "2e5c16df5e8465b40f4ec298246a40bc"
  },
  {
    "url": "build/app/svg/md-snow.svg",
    "revision": "7f621bff285cee5caba673c580ae74d6"
  },
  {
    "url": "build/app/svg/md-speedometer.svg",
    "revision": "e976093c0b533ce5fe22dee79dfd3d49"
  },
  {
    "url": "build/app/svg/md-square-outline.svg",
    "revision": "f08c45e628256769924877bb4e118ff1"
  },
  {
    "url": "build/app/svg/md-square.svg",
    "revision": "fa10cfed2a30917a1f61a430334a79ef"
  },
  {
    "url": "build/app/svg/md-star-half.svg",
    "revision": "c45a1565c134b82bfd9ee15561880b39"
  },
  {
    "url": "build/app/svg/md-star-outline.svg",
    "revision": "2c1d0c7136e5d886f301d10f5f90d803"
  },
  {
    "url": "build/app/svg/md-star.svg",
    "revision": "c2138895d8cabaf6740f7bb04b57345c"
  },
  {
    "url": "build/app/svg/md-stats.svg",
    "revision": "77e760b406338e63fe7b3111eff4252a"
  },
  {
    "url": "build/app/svg/md-stopwatch.svg",
    "revision": "d7f04ea50286daf7e78910f322b198cd"
  },
  {
    "url": "build/app/svg/md-subway.svg",
    "revision": "265774e7957ac942233a210db53e7367"
  },
  {
    "url": "build/app/svg/md-sunny.svg",
    "revision": "6d8661c3ff92ca5e42cf00bb1371b6b6"
  },
  {
    "url": "build/app/svg/md-swap.svg",
    "revision": "b230d50fc48c30e8c5c0ae88d5d68334"
  },
  {
    "url": "build/app/svg/md-switch.svg",
    "revision": "74c01611ee7b57b178ef1ef0022c4d80"
  },
  {
    "url": "build/app/svg/md-sync.svg",
    "revision": "a0fb5f7a8afad9a854377ce396a71b5b"
  },
  {
    "url": "build/app/svg/md-tablet-landscape.svg",
    "revision": "d6746961214fd6ecd6f602f78a305a60"
  },
  {
    "url": "build/app/svg/md-tablet-portrait.svg",
    "revision": "10fa9fdb3a5afa0127f18eccc9c6c849"
  },
  {
    "url": "build/app/svg/md-tennisball.svg",
    "revision": "43ef4a3d87551796064c924b2e25fd85"
  },
  {
    "url": "build/app/svg/md-text.svg",
    "revision": "73428a44bba9bcc4476445067103bcb1"
  },
  {
    "url": "build/app/svg/md-thermometer.svg",
    "revision": "da346ce6fb8c2767089c357b4d618465"
  },
  {
    "url": "build/app/svg/md-thumbs-down.svg",
    "revision": "6a2f8e0846eba7a8dc7008a05fc4188e"
  },
  {
    "url": "build/app/svg/md-thumbs-up.svg",
    "revision": "fc44d85e149bb430f9a053f2478ca6ca"
  },
  {
    "url": "build/app/svg/md-thunderstorm.svg",
    "revision": "049188c8dbcda95b970beaf14a5b0c04"
  },
  {
    "url": "build/app/svg/md-time.svg",
    "revision": "130e75e7f13f66b72ec2acde8378b661"
  },
  {
    "url": "build/app/svg/md-timer.svg",
    "revision": "6d7bdec4fce3c09732d09084b7018f7b"
  },
  {
    "url": "build/app/svg/md-today.svg",
    "revision": "411e8f5a83e042b48b9fea6fe9cecdf4"
  },
  {
    "url": "build/app/svg/md-train.svg",
    "revision": "7ca851cda71bfd47c22e3d549ab6db1c"
  },
  {
    "url": "build/app/svg/md-transgender.svg",
    "revision": "25a075f44e5d0fb6e7d51094e2582d5a"
  },
  {
    "url": "build/app/svg/md-trash.svg",
    "revision": "2141e00a09054bbc752f1755168947b7"
  },
  {
    "url": "build/app/svg/md-trending-down.svg",
    "revision": "65426337171d67608c5ef84b1a4895cc"
  },
  {
    "url": "build/app/svg/md-trending-up.svg",
    "revision": "8ccacbe00be9329b71125e08fe6e0b3a"
  },
  {
    "url": "build/app/svg/md-trophy.svg",
    "revision": "2e69cc06691464d4559570b03ad85dba"
  },
  {
    "url": "build/app/svg/md-tv.svg",
    "revision": "08c72b39fafdd76db66744f7ba7a519c"
  },
  {
    "url": "build/app/svg/md-umbrella.svg",
    "revision": "c153669ba06aa9b2bf562e6f957ab14f"
  },
  {
    "url": "build/app/svg/md-undo.svg",
    "revision": "e2e835621053ea7d5db711d147a76694"
  },
  {
    "url": "build/app/svg/md-unlock.svg",
    "revision": "93c2a9882b1d58aea1277ff08f04c240"
  },
  {
    "url": "build/app/svg/md-videocam.svg",
    "revision": "deb3e4aa3ae4b1de2f44ed6603847d06"
  },
  {
    "url": "build/app/svg/md-volume-high.svg",
    "revision": "e6445464e4e55d0aa413577fd8e1bdf9"
  },
  {
    "url": "build/app/svg/md-volume-low.svg",
    "revision": "95f637872ba75897a861e40fe3bcccb9"
  },
  {
    "url": "build/app/svg/md-volume-mute.svg",
    "revision": "e7422c3fb69dd1bb3f461839aeb9e0a9"
  },
  {
    "url": "build/app/svg/md-volume-off.svg",
    "revision": "3f8924a4a165adf6ad98b6a22e694f0d"
  },
  {
    "url": "build/app/svg/md-walk.svg",
    "revision": "629f0c95d3c4e64a530c6bc4a3435f6a"
  },
  {
    "url": "build/app/svg/md-wallet.svg",
    "revision": "466600041a25718d1de54ab79b3925a9"
  },
  {
    "url": "build/app/svg/md-warning.svg",
    "revision": "2f8f481c42b286869477d302933f9090"
  },
  {
    "url": "build/app/svg/md-watch.svg",
    "revision": "cd7f70387cbf4226a647e957f45d9009"
  },
  {
    "url": "build/app/svg/md-water.svg",
    "revision": "cd816137fc19ab71f63f159670f380af"
  },
  {
    "url": "build/app/svg/md-wifi.svg",
    "revision": "f7019f64fec177143a92780f2611b3e4"
  },
  {
    "url": "build/app/svg/md-wine.svg",
    "revision": "1d82d46b9d9c87fabd5f0b7ba385b5d5"
  },
  {
    "url": "build/app/svg/md-woman.svg",
    "revision": "05ce5b2ca1e24f9c2f3e3104e08b1a75"
  },
  {
    "url": "build/app/swiper.bundle.js",
    "revision": "885b3ec31f9e83628cd16be2d2e3fd5e"
  },
  {
    "url": "build/app/swiper/swiper.bundle.js",
    "revision": "ba0d3d07b552172283eabffdd0424c47"
  },
  {
    "url": "build/app/swiper/swiper.js",
    "revision": "c367d2eccf6c79b874c8df5b7fd0721d"
  },
  {
    "url": "build/app/tap-click.js",
    "revision": "ac40f71fd72fbba3cdddb62018af2af3"
  },
  {
    "url": "index.html",
    "revision": "4ae09ba87e104cb35c5d5a3c27f6b586"
  },
  {
    "url": "manifest.json",
    "revision": "aff7eb18ab3d9ecffbd204cffd29b1a9"
  }
]);


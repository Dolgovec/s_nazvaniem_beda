html {
    min-width: 1200px;
    width: 100%;
}
body,html{
    margin:0;
    padding:0;
    font-family:Tahome,Arial,sans-serif;
}
body{
    min-width:1200px;
    width:100%;
}
img{
    border:0 none;
}
p{
    margin:0;
    padding:0;
}
a{
    text-decoration:none;
    color:#3189ef;
    display: inline-block;
}
a:first-letter{

}
ul{
    list-style:none;
    padding:0;
    margin:0;
}
li{
    padding:0;
    margin:0;
}
input{
    border-radius:1px;
    border:0 none;
}
form{
    margin:0;
    padding:0;
    float:left;
}
table{
    border:0 none;
    border-collapse:collapse;
}
textarea{
    font-family:Tahome,Arial,sans-serif;
}
#wrapper{
    width:100%;
    background:#091f37;
    float:left;
    position:relative;
}
#header{
    width:100%;
    float:left;
}
/*TOP HEADER LINE*/
#top_header_line{
    background:url("/images/header_top_line.png") repeat-x;
    border-bottom:1px solid #1f5698;
    width:1200px;
    margin:0 auto;
}
.top_logo{
    margin-top:6px;
    margin-left:11px;
    float:left;
}
.top_header_user_menu{
    float:right;
    margin-right:16px;
}
/*UNAUTHORIZED*/
.top_header_user_menu.unauthorized{
    margin-right:8px;
}
.registr_forgot{
    float:left;
    font-size:12px;
    color:#fff;
    margin-top:10px;
    margin-right:13px;
}
.reg{
    color:#0099ff;
    cursor:pointer;
    float:left;
    display:block;
    margin-right:5px;
}
.reg:first-letter{
    text-decoration:underline;
}
.forgot{
    color:#0099ff;
    display:block;
    float:left;
    cursor:pointer;
}
.forgot:first-letter{
    text-decoration:underline;

}
.login_input{
    float:left;
    width:141px;
    border-radius:2px;
    border:1px solid #0099ff;
    color:#666666;
    background:#fff;
    padding-left:10px;
    font-size:12px;
    margin-right:4px;
    height:25px;
    margin-top:4px;
    margin-bottom:3px;
}
.submit_login{
    float:left;
    border:0 none;
    background:url("/images/login_button.png") no-repeat;
    width:16px;
    height:17px;
    margin-top:10px;
    margin-left:1px;
    cursor:pointer;
}
/*AUTHORIZED*/
.user_pic{
    float:left;
    border-right:1px solid #225fa8;
    background:url("/images/user_pic_bg.png") repeat-x;
    height:36px;
    position:relative;
}
.user_pic .mess{
    background: none repeat scroll 0 0 #66ccff;
    border-radius: 2px;
    color: #000;
    display: block;
    float: right;
    font-size: 12px;
    left: 25px;
    padding: 0 2px;
    position: absolute;
    z-index: 4;
}
.user_avatar{
    border:1px solid #286fc3;
    width:26px;
    height:26px;
    float:left;
    margin-top:4px;
    margin-left:8px;
    margin-right:6px;
    cursor:pointer;
}
.user_nickname{
    color:#fefeff;
    float:left;
    margin-top:7px;
    font-size:16px;
    cursor:pointer;
    margin-right:15px;
}
.user_pic_arrow{
    position:absolute;
    width:11px;
    height:8px;
    background:url("/images/arrow_down_user_pic.png") no-repeat;
    top:37px;
    left:17px;
    display:none;
    z-index:6;
}
.user_main_menu{
    float:left;
}
.some_li{
    float:left;
    margin-left:16px;
    cursor:pointer;
    position:relative;
    margin-top:8px;
}
.li_first{
    background:url("/images/li_first.png") no-repeat;
    width:22px;
    height:21px;
}
.li_first:hover, .li_first.active{
    background:url("/images/li_first_hover.png") no-repeat;
}
.li_second{
    background:url("/images/pekakoind.png") no-repeat;
    width:21px;
    height:21px;
}
.li_second:hover, .li_second.active{
    background:url("/images/pekakoind_active.png") no-repeat;
}
.li_third{
    background:url("/images/li_third.png") no-repeat;
    width:24px;
    height:21px;
}
.li_third:hover,.li_third.active{
    background:url("/images/li_third_hover.png") no-repeat;
}
.li_fourth{
    background:url("/images/li_fourth.png") no-repeat;
    width:21px;
    height:21px;
}
.li_fourth:hover, .li_fourth.active{
    background:url("/images/li_fourth_hover.png") no-repeat;
}
.li_fifth{
    background:url("/images/li_fifth.png") no-repeat;
    width:21px;
    height:23px;
}
.li_fifth:hover,.li_fifth.acrtive{
    background:url("/images/li_fifth_hover.png") no-repeat;
}
.user_main_menu_hit{
    position:absolute;
    top:24px;
    display:none;
    right:0px;
    z-index:7;
}
.hit_arrow{
    background:url("/images/pic1.png") no-repeat right 1px;
    position:relative;
    right:1px;
    width:100%;
    height:9px;
}
.user_main_menu_hit span{
    background:url("/images/header_top_menu_hit.png") repeat-x;
    float:left;
    color:#fff;
    font-size:12px;
    display:block;
    height:19px;
    padding-left:14px;
    padding-right:5px;
    white-space: nowrap;
}
.hit_2{
    right:10px;
}
.hit_3{
    right:8px;
}
.hit_4{
    right:9px;
}
.hit_5{
    right:10px;
}

/*POPUP USER MENU*/
#user_popup{
    margin-left: 25px;
    background:rgba(0,0,0,0.93);
    height:500px;
    width:1150px;
    position:absolute;
    z-index:5;
    top:37px;
    visibility:hidden;
    min-width:1150px;
}
#user_popup_menu{
    float:left;
    width:100%;
    border-bottom:1px solid #3189ef;
    height:86px;
}
#user_popup_menu ul{
    margin-left:19px;
}
#user_popup_menu li{
    float:left;
    color:#3189ef;
    margin-top:53px;
    margin-right:33px;
    position:relative;
}
#user_popup_menu li a{
    cursor: pointer;
    display: block;
    font-size: 16px;
    padding-bottom: 2px;
    padding-left: 26px;
    padding-top: 5px;
}
#user_popup_menu li a:hover{
    color:white;
}
#user_popup_menu li .active{
    color:white;
    font-size:22px;
    padding-left: 49px;
    padding-right: 10px;
    height:38px;
    line-height: 34px;
}
#user_popup_menu .active_li{
    background:#042447;
    margin-top:41px;
}
.first_menu_pic{
    background:url("/images/first_menu_pic.png") no-repeat left 2px;
}
.first_menu_pic.active{
    background:url("/images/first_menu_pic_active.png") no-repeat 12px 2px;
}
.second_menu_pic{
    background:url("/images/second_menu_pic.png") no-repeat left 2px;
}
.second_menu_pic.active{
    background:url("/images/second_menu_pic_active.png") no-repeat 12px 2px;
}
.third_menu_pic{
    background:url("/images/third_menu_pic.png") no-repeat left 2px;
}
.third_menu_pic.active{
    background:url("/images/third_menu_pic_active.png") no-repeat 12px 2px;
}
.fourth_menu_pic{
    background:url("/images/fourth_menu_pic.png") no-repeat left 2px;
}
.fourth_menu_pic.active{
    background:url("/images/fourth_menu_pic_active.png") no-repeat 12px 2px;
}
.fifth_menu_pic{
    background:url("/images/fifth_menu_pic.png") no-repeat left 2px;
}
.fifth_menu_pic.active{
    background:url("/images/fifth_menu_pic_active.png") no-repeat 12px 2px;
}
.six_menu_pic{
    background:url("/images/six_menu_pic.png") no-repeat left 2px;
}
.six_menu_pic.active{
    background:url("/images/six_menu_pic_active.png") no-repeat 12px 2px;
}
.seven_menu_pic{
    background:url("/images/seven_menu_pic.png") no-repeat left 2px;
}
.seven_menu_pic.active{
    background:url("/images/seven_menu_pic_active.png") no-repeat 12px 2px;
}
.menu_popup_arrow{
    background: url("/images/pic2.png") no-repeat scroll 4px 17px rgba(0, 0, 0, 0);
    padding-bottom: 10px;
    position: absolute;
    top: -21px;
    left:6px;
    z-index:11;
}
.active_li .menu_popup_arrow {
    left: 23px;
    top: -19px;
}
.menu_number {
    background: none repeat scroll 0 0 #56e5d3;
    border-radius: 2px;
    padding-left: 4px;
    padding-right: 4px;
    color:#030b15;
    font-size:12px;
}
/*POPUP USER MESSAGES*/

/*POPUP USER MESSAGES LIST*/
.user_popup_body{
    margin:0 0.9%;
    overflow:hidden;
    width:98.2%;
    position: absolute;
    top: 88px;
    visibility:hidden;
}
.user_popup_body.user_messages{
    visibility:visible;
    top:-9999px;
}
.user_message_list_wrapper {
    float: left;
    width: 36.7%;
}
.user_message_list{
    float:left;
    width:100%;
    height:325px;
    color:white;
    margin-top:11px;
    position:relative;
}
.user_message_list_wrapper .bottom_shadow{
    background: url("/images/bottom_shadow.png") repeat-x scroll left bottom rgba(0, 0, 0, 0);
    height: 66px;
    position: absolute;
    width: 36%;
    z-index: 10;
    top:270px;
}
.user_message_list_wrapper .top_shadow{
    background: url("/images/top_shadow.png") repeat-x scroll left top rgba(0, 0, 0, 0);
    height: 66px;
    position: absolute;
    width: 36%;
    z-index: 10;
    top:11px;
    display:none;
}

.user_message_list_row{
    width:92.3%;
    padding:6px 0 5px;
    overflow:hidden;
    position:relative;
    cursor:pointer;
}
.user_message_list_message{
    width:47%;
    float:left;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow:hidden;
    font-size:14px;
    color:#fff;
    margin-top:6px;
}
.user_message_list_row.new{
    width:92.3%;
    padding-right:5%;
    background:url("/images/message_list_new.png") repeat-x;
    overflow:hidden;
}
.user_message_list_row.new.active{
    width:92.3%;
    padding-right:7.7%;
    background:url("/images/message_list_new.png") repeat-x;
    overflow:hidden;
}
.user_message_list_row.active{
    width:92.3%;
    padding-right:7.7%;
    overflow:hidden;
}
.user_message_list_contact{
    width:48%;
    margin-right:15px;
    float:left;
    position:relative;
}
.user_message_list_contact > img {
    margin-left: 5px;
    float:left;
}
.user_online.true{
    background:url("/images/online_circle.png") no-repeat;
    width:9px;
    height:9px;
    position:absolute;
    z-index:7;
    top:-3px;
    left:34px;
}
.user_message_nick_date{
    float:left;
    margin-left:7px;
    width:70%;
}
.user_message_nick{
    font-size:16px;
    color:#fff;
    float:left;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow:hidden;
    width:100%;
}
.user_mesage_date{
    color:#6a96cc;
    font-size:10px;
    float:left;
    clear: both;
}
.user_message_list_row.active .now_chatting{
    background:url("/images/true_chatting.png") no-repeat;
    width:16px;
    height:21px;
    position:absolute;
    z-index:8;
    top:10px;
    right:9px;
}
/*POPUP USER MESSAGES CHAT*/
.user_message_chat{
    width:100%;
    float:left;
    height:325px;
    margin-top:11px;
}
.user_message_chat_wrapper{
    width:63.2%;
    float:left;
    margin-left:-1px;
}
.user_message_chat_wrapper .bottom_shadow{
    background: url("/images/bottom_shadow.png") repeat-x scroll left bottom rgba(0, 0, 0, 0);
    height: 66px;
    position: absolute;
    width: 62.2%;
    z-index: 10;
    top:270px;
}
.user_message_chat_wrapper .top_shadow{
    background: url("/images/top_shadow.png") repeat-x scroll left top rgba(0, 0, 0, 0);
    height: 66px;
    position: absolute;
    width: 62.2%;
    z-index: 10;
    top:11px;
    display:none;
}
.user_message_chat_contact img{
    width:38px;
    height:38px;
    float:left;
}
.user_message__chat_nick {
    float: left;
    color:#00abff;
    font-size:16px;
}
.user_mesage__chat_date {
    float: left;
    clear:both;
    color:#fff;
    font-size:10px;
    margin-top:4px;
}
.user_message_chat_row{
    float:left;
    margin-left: 5px;
    padding: 16px 4% 14px 12px;
    width: 95%;

}
.user_message_chat_row.new{
    background: url("/images/message_list_new.png") repeat scroll 0 0 rgba(0, 0, 0, 0);
    margin-top:6px;
}
.user_message_chat_row.new .some_top_chat_line{
    top:-22px;
}
.user_message_chat_contact .user_message_nick_date{
    margin-left:11px;
    margin-bottom:8px;
}
.user_message_chat_contact {
    float: left;
    width:100%;
    margin-bottom:6px;
    position:relative;

}
.user_message_chat_message {
    float: left;
    color:#fff;
    font-size:14px;
    line-height:16px;
    cursor: text;
}
.user_message_chat_row:first-child{
    margin-top:-1px;
}
.some_top_chat_line {
    background:#00529f;
    height: 1px;
    width: 38px;
    position:relative;
    top:-16px;
}
.user_message_chat_contact .user_online.true{
    top:-4px;
    left:32px;
}
/*USER MESSAGE OPTIONS*/
.user_message_options{
    overflow:hidden;
    width:100%;
    padding-top:11px;
}
.user_message_enter_message form{
    float:none;
}
.user_message_search{
    color:#fff;
    float:left;
    width:36.7%;
    margin-top:11px;
}
#search_input {
    height: 29px;
    margin-left: 11px;
    color:#9c9c9c;
    width: 134px;
    padding-left:46px;
    background:url("/images/search_icon.png") no-repeat 8px 6px #fff;
    margin-right:7.2%;
    font-size:14px;
}
#user_input {
    height: 29px;
    margin-left: 11px;
    color:#9c9c9c;
    width: 134px;
    padding-left:46px;
    background:url("/images/search_icon.png") no-repeat 8px 6px #fff;
    margin-right:7.2%;
    font-size:14px;
}
.user_message_search label {
    font-size: 14px;
    cursor:pointer;
}
.blue_checkbox{
    margin:0;
}
.user_message_enter_message{
    float:left;
    width:61.9%;
    padding-top:11px;
    background:url("/images/podloshka_mesasges.png") no-repeat 15% 0;
}
#chat_submit{
    cursor:pointer;
    background:#3189ef;
    color:#aed4ff;
    height:38px;
    width:120px;
    float:left;
    font-size:18px;
    border-top-left-radius:0px;
    border-bottom-left-radius:0px;
}
#enter_message_input{
    color:#9c9c9c;
    font-size:16px;
    height:36px;
    border-top-right-radius:0px;
    border-bottom-right-radius:0px;
    width:62.3%;
    margin-left:16px;
    padding-left:2%;
    float:left;
}
.chat_icons{
    margin-left:10px;
    float:left;
}
.chat_icons > img {
    cursor: pointer;
    margin-left: 12px;
    margin-top: 9px;
}
/*PASHALKI*/
.pashalochka {
    float: left;
    margin-top: 8px;
    margin-left: 34%;
    color:blue;
}
/*POPUP SUBMENU*/
.submenu_wrapper {
    overflow: hidden;
}
.submenu_li{
    color:#3189ef;
    font-size:14px;
    float:left;
    cursor:pointer;
    margin-right:30px;
    margin-top:8px;
}
.submenu.achievements{
    float:left;
    width:45%;
}
.submenu_li:hover{
    color:#fff;
}
.submenu.streams {
    margin-left: 20px;
}
.submenu_li.active{
    font-size:16px;
    color:#fff;
    background:none repeat scroll 0 0 #042447;
    padding:6px 18px 9px;
    margin-right:18px;
    margin-top:0px;
}
.submenu_checkboxes{
    float:right;
    margin-top:6px;
    background:url("/images/plashka_bottom.png") no-repeat scroll right -2px rgba(0, 0, 0, 0);
    color:white;
    padding-bottom: 12px;
    padding-left: 167px;
    font-size:14px;
    padding-right:0.9%;
}
.checkboxes_wrapper{
    margin-left:36px;
    float:left;
    margin-top:2px;
}
.checkboxes_wrapper label{
    margin-left:6px;
    cursor:pointer;
}
/*HIDDING POPUP BODY*/
.user_achievements, .user_streams, .user_profile{
    display:block;
    width:99.1%;
    margin-left:0.9%;
}

/*ACHIEVEMENTS*/
.achievements_wrapper{

    width:99%;
}
.user_achievements_list{
    margin-top:19px;
    margin-left:7px;
    height:345px;
}
.some_achievement{
    float:left;
    width:102px;
    margin-right:34px;
    height:173px;
}
.active_achiv{
    border:6px solid #0f3c70;
}
.noactive_achiv{
    border:6px solid #272727;
    filter: url("/images/filters.svg#grayscale");
    filter: gray;
    -webkit-filter: grayscale(1);
}
.achievement_podpis{
    text-align:center;
    width:92px;
    display:block;
    color:#fff;
    font-size:12px;
    margin-top:12px;
    padding:0 5px;
    line-height:13px;
    overflow:hidden;
    height:40px;
}
.achievements_wrapper .bottom_shadow{
    background: url("/images/bottom_shadow.png") repeat-x scroll 21px bottom rgba(0, 0, 0, 0);
    height: 66px;
    position: absolute;
    width: 97%;
    z-index: 10;
    top:335px;
}
.achievements_wrapper .top_shadow{
    background: url("/images/top_shadow.png") repeat-x scroll left top rgba(0, 0, 0, 0);
    height: 66px;
    position: absolute;
    width: 97%;
    z-index: 10;
    top:56px;
    display:none;
}
/*MAIN PART*/
#workarea{
    width:100%;
    color:white;
    background:url("/images/main_bg.jpg") no-repeat top center #09111c;
    overflow:hidden;
}
#streams_part{
    width:1200px;
    margin:0 auto;

}
.left_column{
    float:left;
    width:833px;
}
.right_column{
    float:left;
    width:288px;
    margin-left:23px;
}
/*TOP PAGE MENU*/
.top_streams_menu{
    float: left;
    width: 1200px;
}
.site_filter .left_menu{
    float:left;
    margin-left:12px;
    margin-right:3px;
    position:relative;
    margin-top:36px;
}
.site_filter .left_menu_column_text{
    float:left;
    text-align:right;
    margin-left:16px;
    margin-right:3px;
    margin-top: 19px;
    width:104px;
}
.site_filter .left_menu_column_text span{
    float:left;
    display:block;
    font-size:12px;
    color:#425466;
    clear:both;
    cursor:pointer;
    min-width:54px;
    padding-left:10px;
    line-height:20px;
    text-align:left;
}
.site_filter .left_menu_column_text span.active{
    color:#fff;
    font-size:12px;
    /*background:url("/images/white_blick.png") repeat-x;*/
}
.site_filter .left_menu_column_text span.first {
    font-size: 14px;
}
.stick{
    position:absolute;
    width:10000px;
    height:3px;
    background:url("/images/stick.png") repeat-x;
    left:-10023px;
    top:49px;
}
.first_topmenu_line{
    position:absolute;
    top:31px;
    width:48px;
    left:-25px;
    height:34px;
    background:url("/images/first_line_static.png") no-repeat;
}
.first_topmenu_line.active{
    background:url("/images/first_line.png") no-repeat;
}
.second_topmenu_line{
    position:absolute;
    top:48px;
    width:48px;
    left:-25px;
    height:4px;
    background:url("/images/second_line_static.png") no-repeat;
}
.second_topmenu_line.active{
    background:url("/images/second_line.png") no-repeat;
}
.third_topmenu_line{
    position:absolute;
    top:36px;
    width:48px;
    left:-25px;
    height:36px;
    background:url("/images/third_line_static.png") no-repeat;
}
.third_topmenu_line.active{
    background:url("/images/third_line.png") no-repeat;
}
/*
.top_left_menu_column_numbers{
float:left;
width:52px;
height:118px;
background:rgba(0,0,0,0.6);
margin-top:19px;
border-radius:4px;
padding:2px;
}
.top_left_menu_column_numbers .number{
float:left;
clear:both;
display:block;
text-align:center;
color:#4f5a65;
font-size:20px;
width:100%;
height:38px;
cursor:pointer;
line-height:36px;
}
.top_left_menu_column_numbers .number.active{
background:#0390d9;
border-radius:4px;
color:#fff;
}*/
.site_filter .right_menu{
    float:left;
    width:738px;
    margin-right:22px;
    margin-top:28px;
}
.site_filter .first_cat_level, .site_filter .second_cat_level, .site_filter .third_cat_level{
    float:left;
    width:100%;
    border-radius:4px;
    margin-bottom:6px;
}
.site_filter .first_cat_level{
    background:url("/images/menu_bg1.png") repeat-x;
}
.site_filter .second_cat_level{
    background:url("/images/menu_bg2.png") repeat-x;
}
.site_filter .third_cat_level{
    background:url("/images/menu_bg2.png") repeat-x;
}
.site_filter a{
    color:#353b40;
    font-size:24px;
    display:block;
    float:left;
    width:142px;
    text-align:center;
}
.cifri_wrapper{
    float:left;
    background:url("/images/grey_circle.png") no-repeat right 55%;
    width: 142px;
}
.site_filter .third_cat_level .cifri_wrapper:last-child, .site_filter .first_cat_level .cifri_wrapper:last-child{
    background:none;
}
.cifri {
    display: block;
    float: right;
    color:#073665;
    font-size:12px;
    background:#3399ff;
    margin-right:-3px;
    margin-top: -56px;
    position:relative;
    z-index:4;
    border-radius:2px;
    padding:0 4px;
    opacity:0.48;
}
.cifri_wrapper.active .cifri{
    opacity:1;
}
.site_filter .first_cat_level a{
    padding:13px 0;
}

.site_filter .second_cat_level a, .site_filter .third_cat_level a{
    font-size:18px;
    color:#4b5056;
    padding:5px 0;
}
.site_filter .first_cat_level .cifri_wrapper.active a   {
    background:url("/images/big_blick.png") center center no-repeat;
    color:#fff;
}
.site_filter .second_cat_level .cifri_wrapper.active  a  , .site_filter .third_cat_level .cifri_wrapper.active a{
    background:url("/images/smal_blick.png") center center no-repeat;
    color:#fff;
}
.top_streams_menu_create{
    float:left;
    margin-left:37px;
    width:239px;
    margin-top:37px;
}
.create_stream_but, .create_room_but{
    background:url("/images/begin_stream.png") no-repeat center center;
    text-transform:uppercase;
    font-size:18px;
    font-weight:bold;
    color:#003366;
    width:239px;
    line-height:52px;
    height:51px;
    text-align:center;
    cursor:pointer;
    border:0 none;
}
.top_streams_menu_create .text{
    font-size:12px;
    color:#fff;
    text-align:center;
    display:block;
    width:100%;
    margin-top:15px;
}
.top_streams_menu_create .text span{
    text-decoration:underline;
    cursor:pointer;
}
/*USER STREAM PAGE*/
.user_stream_page{
    float:left;
    width:1169px;
    margin-left:15px;
    position:relative;
}
.user_tream_page_wrapper{
    width: 909px;
    float:left;
    background:#000b1b;
    padding-bottom:10px;
    height:561px;
}
.main_userpage_stream_block{
    float:left;
    width:903px;
    height:511px;
}
.top_userpage_stream_block{
    float:left;
    margin-top:9px;
    width:100%;
}
/*STREAMS*/
.all_streams{
    float:left;
    width:1169px;
    position:relative;
    margin-top:5px;
    margin-left:15px;
    padding-bottom:14px;
    background:#000b1b;
}
.block_before_streams{
    background:#000b1b;
    float:left;
    width:100%;
    height:50px;
}
.unknow_text_block{
    float:left;
    margin-top:6px;
}

a.back_to_the_list,div.back_to_the_list {
    background: url("/images/back_to_the_list.png") no-repeat scroll 0 0 rgba(0, 0, 0, 0);
    cursor: pointer;
    float: left;
    height: 50px;
    width: 23px;
}
.some_unknow_block,.some_unknow_block img{
    float:left;
    margin-right:10px;
}
.some_unknow_block a{
    float: left;
}
.user_stream_page .some_unknow_block .text1, .user_stream_page .some_unknow_block .text2{
    color:#fff;
    float:left;
}
.finish_stream{
    color:#3399ff;
    text-decoration:underline;
    font-size:12px;
    float:left;
    margin-left:9px;
    margin-top:9px;
    cursor:pointer;
}
.streamListContainer .some_unknow_block .text1{
    color:#666;
    font-size:16px;
    clear:right;
    float:left;
}
.streamer_subscribed_star{
    width:13px;
    height:13px;
    float:left;
    background:url("/images/subscribe_streamer.png") no-repeat;
    cursor:pointer;
    clear: left;
    margin-right:4px;
    margin-top:1px;
}
.streamer_subscribed_star.subscribed{
    background:url("/images/subscribe_streamer_active.png") no-repeat;
}
.streamListContainer .some_unknow_block .text2{
    color:#666;

    font-size:12px;
    float:left;
    clear:both;
    display:block;
}
.stream_rating_block{
    float:right;
    margin-right:13px;
    margin-top:13px;
    position:relative;
}
.how_much_left_popup{
    position:absolute;
    top:-29px;
    padding-bottom:6px;
    background:url("/images/arrow_down_dark_blue.png") no-repeat 45px 23px;
    width:186px;
    left:-35px;
    z-index:5;
    display:none;
}
.how_much_left_popup.plus{
    background:url("/images/arrow_down_dark_blue.png") no-repeat 45px 23px;
    display:block;
}
.how_much_left_popup.minus{
    background:url("/images/arrow_down_dark_blue.png") no-repeat 147px 23px;
    display:block;
}
.how_much_left{
    font-size:12px;
    color:#ffffff;
    background:#0a2749;
    padding:3px 0 5px;
    display:block;
    width:186px;
    text-align:center;
}
.stream_rating_block .streamer_rating {
    display: none;
    float: left;
    margin:0 1px;
}
.streamer_rating > input {
    border-radius: 0;
    height: 21px;
    padding-right: 5px;
    text-align: right;
    width: 53px;
    font-size:14px;
    color:#333333;
}
.today_rating{
    font-size:14px;
    color:#3399ff;
    text-align:center;
    background:rgba(51,153,255,0.4);
    width:61px;
    height:21px;
    padding-top:2px;
    margin:0 1px;
    float:left;
}
.up_rating{
    background: url("/images/up_rating.png") no-repeat scroll 0 0 rgba(0, 0, 0, 0);
    float: left;
    height: 23px;
    width: 35px;
    cursor:pointer;
}
.up_rating.selected{
    background: url("/images/up_rating_selected.png") no-repeat scroll 0 0 rgba(0, 0, 0, 0);
}
.down_rating {
    background: url("/images/down_rating.png") no-repeat scroll 0 0 rgba(0, 0, 0, 0);
    float: left;
    height: 23px;
    width: 35px;
    cursor:pointer;
}
.down_rating.selected {
    background: url("/images/down_rating_selected.png") no-repeat scroll 0 0 rgba(0, 0, 0, 0);
}
.random_stream{
    float:right;
    display:block;
    background:url("/images/random_unhover.png");
    width:29px;
    height:29px;
    margin-right:10px;
    margin-top:10px;
}
.random_stream:hover{
    background:url("/images/random.png");
}
.all_streams_wrapper{
    width: 910px;
    height:500px;
    float:left;
    padding-left:5px;
    background:#01132b;
    padding-top:6px;
}
.min_param, .streamListContainer{
    min-height:500px;
    min-width:905px;
}
.user_chats .top_stream_wrapper_border2{
    top:-4px;
}

.stream.normal_one {
    float: left;
    position:relative;
    width:286px;
    height:160px;
    border:5px solid #01132b;
}
.stream.normal_one:hover {
    border:5px solid #003366;
    width:286px;
    height:160px;
}
.stream_pic > a {
    float: left;
}
.normal_one .stream_pic{
    float:left;
    position:relative;
}
.normal_one  .stream_pic img {
    width:286px;
    height:160px;
}
.normal_one .filter{
    width:286px;
    height:160px;
    position:absolute;
    z-index:3;
    top:0;
    background:rgba(0,11,27,0.6);
    left:0;
}
.normal_one  .filter_on_pic{
    width:286px;
    height:160px;
    position:absolute;
    z-index:2;
    top:0;
    background:url("/images/filter_pic.png") no-repeat;
    left:0;
}
.normal_one .constant_filter{
    width:286px;
    height:160px;
    position:absolute;
    z-index:2;
    top:0;
    background:url("/images/SOPP.png") no-repeat;
    left:0;
}
.normal_one.stream .main_stream_info {
    float: left;
    width:286px;
    background:rgba(0,11,27,0.6);
    position:absolute;
    z-index:4;
    bottom:0px;
    height:46px;
}
.left_part_info {
    float: left;
    width:208px;
    margin-left:8px;
}
.normal_one .subsribe {
    float: left;
    background:url("/images/subscribe.png") no-repeat;
    width:41px;
    height:41px;
    cursor:pointer;
    margin-top:2px;
}
.normal_one .stream_name {
    clear: both;
    display: block;
    float: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    color:#fff;
    font-size:16px;
    margin-top:2px;
}
.normal_one  .streamer_name,.normal_one  .streamer_viewers,.normal_one  .streamer_rating{
    color:#fff;
    font-size:12px;
    clear: both;
    float:left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width:100%;
}
.normal_one   .streamer_viewers {
    margin-bottom: 2px;
    margin-top: 7px;
    display:none;
}
.normal_one   .streamer_rating {
    display:none;
}
.normal_one .right_part_info {
    float: right;
    margin-right:2px;
}
.right_part_info .eighteen{
    color:#ecabab;
    font-size:12px;
    background:#cd2337;
    display:block;
    float:left;
    border-radius:1px;
    padding:0 3px 0 2px;
    margin-top:14px;
}
.preview_stream_info{
    position:absolute;
    background:rgba(0,0,0,0.5);
    padding:3px 6px 4px 7px;
    right:3px;
    top:3px;
    z-index:3;
}
.preview_stream_info span{
    padding-left:17px;
    color:#fff;
    font-size:12px;
}
.preview_stream_info .down{
    background:url("/images/preview_stream_rating_down.png") no-repeat center left;
}
.preview_stream_info .up{
    background:url("/images/preview_stream_rating_up.png") no-repeat center left;
}
/*ANOUNSES*/
#weekly_anounses {
    width:288px;
    height:110px;
    float:left;
    position:relative;
    margin-top:19px;
}
.right_column.streamers_page #weekly_anounses {
    width:100%;
}

.good_news_everyone {
    float: left;
    height: 110px;
}
.date_calendar_block{
    float:left;
    width:100%;
    border-bottom:1px dotted #898d96;
    padding-bottom:4px;
}
.date_calendar_block img{
    float:left;
    margin: 0 5px;
}
.date_calendar_block .date_calendar{
    float:left;
    color:#fff;
    font-size:16px;
    margin-top:2px;
    margin-left:3px;
}
.calendar_text{
    float:left;
    display:block;
    width:100%;
    text-align:left;
    color:#fff;
    font-size:12px;
    margin-top:5px;
    line-height:17px;
}
.next_news{
    position:absolute;
    right:6px;
    top:12px;
    width:16px;
    height:9px;
    background:url("/images/active_arrow_top.png") no-repeat;
    z-index:4;
    cursor:pointer;
}
.next_news.disabled{
    opacity:0.7;
}
.prev_news{
    position:absolute;
    right:28px;
    top:12px;
    width:16px;
    height:9px;
    cursor:pointer;
    background:url("/images/disable_arrow_bottom.png") no-repeat;
    z-index:4;
}
.prev_news.disabled{
    opacity:0.6;
}
.top_category_rating{
    float:left;
    width:245px;
    padding-left: 9px;
    background:#01132b;
    height:506px;
}
/*RATING LIST*/
.whats_game{
    float:left;
    width:100%;
}
.whats_game .game_name{
    display:block;
    color:#fff;
    width:100%;
    text-align:center;
    font-size:12px;
    margin-top:15px;
    margin-bottom:4px;
}
.rating_list{
    float: left;
    width: 225px;
    height: 416px;
    overflow: hidden;
}
.rating_row{
    float:left;
    border-top:1px solid #173a61;
    width:100%;
    padding-top: 6px;
    padding-bottom: 5px;
}
.rating_row:hover{
    background:#0b2c4a;
}
.rating_position{
    float:left;
    color:#87929c;
    font-size:12px;
    text-align: left;
    display:block;
    margin-left:10px;
}

.rating_row .streamer_name{
    color:#87929c;
    font-size:12px;
    margin-left:10px;
    float:left;
    display:block;
    width:145px;
    overflow:hidden;
    text-overflow:ellipsis;
}
.rating_row .streamer_name span{
    color:#66cc99;
    font-weight:bold;
    text-transform:uppercase;
    font-size:12px;
}
.rating_number{
    float:right;
    margin-right:10px;
    color:#87929c;
    font-size:12px;
}
.live .rating_position, .live .streamer_name, .live .rating_number{
    color:#fff;
}
.next_rating_page, .next_room_page{
    position:absolute;
    right:93px;
    bottom:39px;
    width:16px;
    height:9px;
    background:url("/images/active_arrow_top.png") no-repeat;
    z-index:5;
    cursor:pointer;
}
.next_rating_page.disabled, .next_room_page.disabled, .next_users_page.disabled{
    opacity:0.6;
}
.prev_rating_page, .prev_room_page{
    position:absolute;
    right:116px;
    bottom:39px;
    width:16px;
    height:9px;
    cursor:pointer;
    background:url("/images/disable_arrow_bottom.png") no-repeat;
    z-index:5;
}
.prev_rating_page.disabled, .prev_room_page.disabled,.prev_users_page.disabled{
    opacity:0.6;
}
.rating_text{
    color:#fff;
    font-size:12px;
    float:left;
    margin-top:10px;
    margin-left:9px;
}
.rating_text span{
    color:#66ccff
}
.room_list .switch {
    width:252px;
    height:35px;
    margin-bottom:16px;
}
.room_list .switch-label{
    font-size:14px;
    line-height: 36px;
}
.room_list .switch-selection{
    height:33px;
    width:118px;
}
.room_list .switch-label-on {
    width: 118px;
}
.room_list .switch-label-off {
    color: #666666;
    width: 104px;
    margin-left:20px;
}
.room_list .checkboxes_wrapper{
    margin-left:0px;
    margin-right:18px;
}
/*CHAT S ROBOTOM*/
.ask_question{
    margin-top:24px;
    float:left;
    width:100%;
    background:rgba(0,0,0,0.5);
}
.chat_robot{
    margin-left:10px;
    width:274px;
    float:left;
    margin-top: 11px;
}
.chat_robot_wrapper{
    height:85px;
}
.chat_robot_msg{
    float:left;
    width:100%;
    font-size:12px;
    margin-bottom:14px;
}
.chat_robot_msg .username{
    color:#66ccff;
}
.chat_robot_msg .text{
    color:#fff;
    word-wrap: break-word;
}
.chat_robot_msg .text a{
    color:#66ccff;
    text-decoration:underline;
}
.input_tobot{
    float:left;
    position:relative;
    width:100%;
    margin-top:8px;
}
.input_tobot input{
    padding:0;
    margin:0;
    width:233px;
    height:28px;
    border:0 none;
    padding-left:12px;
    font-size:12px;
    color:#666666;
    border-radius:0;
    float:left;
}
.input_tobot .smiles{
    position:absolute;
    top:6px;
    right:51px;
    width:16px;
    height:16px;
    cursor:pointer;
    background:url("/images/smiles.png") no-repeat;
}
.submit_robot{
    border:0 none;
    width:43px;
    height:28px;
    background:url("/images/right_arrow.png") no-repeat center center #0099ff;
    font-size:30px;
    color:#33ccff;
    padding:0;
    cursor:pointer;
    float:left;
}
/*CHAT*/
.user_chats{
    float:left;
    width:260px;
    height: 561px;
    position:relative;

}
.chats_wrapper{
    height: 543px;

    width: 100%;

}
.stream_wrapper_middle_border,.top_stream_wrapper_middle_border {
    float: left;
    height: 5px;
    left: 100px;
    position: absolute;
    background:#0099ff;
}
.user_chats .top_stream_wrapper_border1{
    background:url("/images/top_left_border.png") no-repeat;
    top:0px;
}
.user_chats  .bottom_stream_wrapper_border2{
    background:url("/images/bottom_right_border.png") no-repeat scroll right 0 rgba(0, 0, 0, 0);
    bottom:-10px;
    height:5px;
}
.user_chats .bottom_stream_wrapper_border1{
    bottom:-14px;
}
.chat_header{
    float:left;
    width:100%;
    position: relative;
    background:#00234a;
    padding-top:20px;

}
.chat_to_streamer{
    float:left;
    font-size:14px;
    color:#fff;
    margin-top: -5px;
    margin-left:11px;
    margin-right:11px;
}
.chat_streamer_action {
    float: left;
    width: 100%;
    background:#0b2e55;
    position:relative;
    padding: 7px 0;

}
.chats_list {
    float: left;
    margin-top: -11px;
    padding-bottom:11px;
    position:relative;
}
.popup_chats_list {
    background: none repeat scroll 0 0 #000b1b;
    position: absolute;
    top: 28px;
    z-index: 3;
    width:201px;
    height:223px;
    display:none;
}
.popup_chats_list_wrapper{
    width:201px;
    height:223px;
    float:left;
}
.channel_name_row {
    float: left;
    padding: 6px 0;
    width:100%;
    cursor:pointer;
}
.channel_name_row.active{
    background:#1e2b39;
}
.channel_name_row.active .chat_name{
    font-weight:bold;
}
.channel_name_row:hover {
    background:#1e2b39;
}
.chat_streamer_action .text {
    color: #3399ff;
    display: block;
    float: left;
    font-size: 14px;
    padding-right: 15px;
    cursor:pointer;
    background:url("/images/arrow_down_blue.png") no-repeat right center;
    margin-left: 11px;
}
.popup_actions_list {
    clear: both;
    float: left;
    position:absolute;
    z-index:3;
    background:url("/images/halfarrow.png") no-repeat scroll 0 top rgba(0, 0, 0, 0);
    width:100px;
    top:26px;
    left:10px;
    display:none;
    padding-top:5px;
}
.popup_actions_list_wrapper{
    background:#000;
    width:100%;
    float:left;
}
.selected_channel {
    background: none repeat scroll 0 0 #000b1b;
    border-radius: 2px;
    float: left;
    padding: 6px 0px 6px 0;
    width: 201px;
    cursor:pointer;
}
.selected_channel span {
    display: block;
    float: left;
    color:#ffffff;
    font-size:14px;
    width:170px;
    padding-left:5px;
    overflow: hidden;
    text-align: right;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.selected_channel .arrow_block {
    float: right;
    background:url("/images/white_arrow.png") no-repeat;
    height: 5px;
    width: 9px;
    margin-top:7px;
    margin-right: 8px;
}
.action_name_row{
    float:left;
    width:100%;
    background:#0b2e55;
    padding:3px 0 3px;
    cursor:pointer;
    text-indent:11px;
    font-size:14px;
}

.chat_name{
    color: #fff;
    float: left;
    font-size: 12px;
    width:150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.chat_people{
    float:left;
    color:#fff;
    font-size:12px;
    width:34px;
    padding-left:6px;
}
.chat_body {
    float: left;
    width: 100%;
    background:rgba(0,14,35,0.9);
    height:571px;
    position:relative;
}
.chat_body  .history{
    float:left;
    margin-top:24px;
    width:100%;
    text-align:center;
    margin-bottom:18px;
}
.chat_body  .history span{
    border-radius:2px;
    padding:5px 30px;
    background:#14affb;
    color:#000;
    cursor:pointer;
}
.chat_wrapper {
    float: left;
    width: 100%;
    height:495px;
    position:relative;
    padding-bottom:0px;
}
.top_chat_shadow{
    background:url("/images/chat_bg.png") repeat-x;
    position:absolute;
    top:0px;
    left:0px;
    z-index:2;
    width:100%;
    height:41px;
    display:none;
}
.chat_bottom_line{
    width:100%;
    background:#000b1b;
    height:11px;
    float:left;
}
.chat_wrapper .mCSB_scrollTools {
    z-index: 3;
}
.chat_wrapper .mCSB_inside > .mCSB_container {
    margin-right: 10px;
    min-height:300px;
}
.chat_message {
    line-height: 13px;
    padding:6px 10px 5px;
}
.chat_message:hover {
    background: #0d335d;
}
.chat_message  .user_name, .chat_message .user_name_to{
    color: #66ccff;
    font-size: 12px;
    padding-right: 2px;
    line-height: 13px;
    cursor: pointer;
    float: none;
}
.chat_message .user_name_to {
    padding-left: 0px;
}
.chat_message  .user_name.red{
    color:red;
}
.chat_message  .user_name.system{
    color:burlywood;
}
.chat_message  .user_name.purple{
    color:purple;
}
.chat_message  .user_name.orange{
    color:orange;
}
.chat_message  .user_name.green{
    color:#52d197;
}
.chat_message .toMe, .chat_message  .toPerson{
    color:#ff6633;
    font-size: 12px;
}
.user_chat_message.streamer {
    color:#fff297;
}
.user_chat_message.streamer .user_name{
    background:url("/images/arrow_right_green.png") left 3px no-repeat;
    padding-left:10px;
}
.user_chat_message{
    display: inline;
    font-size: 12px;
    color: #fff;
    padding-top: 0px;

    word-wrap: break-word;
    white-space: pre-wrap;
}
.user_chat_message img {
    padding: 0 5px;
}
.user_chat_message.answer{
    margin-bottom:0px;
    float:none;
    color:#ffff99;
}
.click_user_popup{
    position:absolute;
    width:208px;
    left:10px;
    background:url("/images/halfarrow.png") no-repeat 0px top;
    padding-top:5px;
    z-index:4;
    display:none;
}
.popup_actions_list.click_user_popup {
    min-width: 127px;
}
.click_user_popup.action_user{
    top:20px;
    width: 141px;
}
.click_user_popup.bottom{
    top:-95px;
    background: 0 none;
    padding-bottom:0px;
    padding-top:0px;
}
.option_popup .click_user_popup_wrapper{
    width:208px;
}
.option_popup .click_user_popup_wrapper .click_user_popup_row{
    padding-left:18px;
    width:190px;
}
.click_user_popup.bottom .click_user_popup_wrapper{

}
.click_user_popup_wrapper{
    border-radius:0px;
    background:none repeat scroll 0 0 #000;
    float:left;
}
.click_user_popup_row{
    width:131px;
    color:#fff;
    font-size:12px;
    padding-left:10px;
    float:left;
    cursor:pointer;
    padding-top:4px;
    padding-bottom:4px;
}
.click_user_popup_row.chat_opt{
    text-align:left;
}
.click_user_popup_row.enabled{
    background: url("/images/enabled.png") no-repeat scroll 6px center rgba(0, 0, 0, 0);
}
.click_user_popup_row.disabled{
    background: url("/images/disabled.png") no-repeat scroll 6px center rgba(0, 0, 0, 0);
}
.click_user_popup_row:hover{
    background-color:#333333;
}
.chat_message .chat_plus{
    width:15px;
    height:15px;
    float:right;
    background:url("/images/chat_plus.png") no-repeat;
    position:absolute;
    right:19px;
    cursor:pointer;
    bottom:5px;
    display:none;
}
.chat_message:hover .chat_plus{
    display:block;
}
.chat_plus:hover .how_much_pluses{
    display:block;
}
.how_much_pluses{
    position:absolute;
    top:-24px;
    width:35px;
    background:url("/images/chat_little_arrow_down.png") no-repeat center bottom;
    text-align:center;
    padding-bottom:5px;
    left:-10px;
    display:none;
}
.how_much_pluses .nubmer{
    background:#336699;
    border-radius:2px;
    padding:2px;
    color:#fff;
    font-size:12px;
}
.answer .user_name {
    background: url("/images/chat_answer.png") repeat-y scroll 13px 0 rgba(0, 0, 0, 0);
    min-height: 16px;
    padding-left: 27px;
}
.chat_body .chat_input{
    font-size:12px;
    color:#666;
    border-radius:0;
    width:100%;
    padding-left:0px;
    text-indent:11px;
    margin-top:0px;
    border:0;
    padding-right:0px;
    padding-top:2px;
}
.chat_body form{
    float:left;
    width:100%;
}
.send_blue{
    background:url("/images/right_arrow.png") no-repeat center center #0099ff;
    cursor:pointer;
    border:0;
    float:left;
    width:10%;
    height:29px;
    margin-top:0px;
    display:none
}
.chat_buttons {
    float: left;
    width:100%;
    margin-top:8px;
    padding-bottom:2px;
}
.chat_images{
    float:left;
    position:relative;
    width:67%;
    margin-left: 9px;
    min-width:67%;
    min-height:25px;
}
.chat_pic{
    width:21px;
    height:21px;
    margin-left:4px;
    cursor:pointer;
    position:relative;
    display:inline-block;
}
.chat_hint{
    z-index:4;
    position:absolute;
    top:24px;
    left:-23px;
    padding-bottom:5px;
    display:none;
}
.chat_hint span{
    padding:0 4px 1px;
    color:#fff;
    font-size:12px;
    background:#000;
    z-index:2;
}

.chat_pic.player_popup .chat_hint{
    left:-20px;
}
.chat_pic.robot .chat_hint{
    width:98px;
    left:-39px;
    padding-bottom:4px;
}
.options.chat_pic .chat_hint{
    left:-22px;
}
.smiles.chat_pic .chat_hint{
    left:-15px;
}
.poll.chat_pic .chat_hint{
    left:-25px;
}
.mat_filter{

    background:url("/images/mat_img_grey.png") no-repeat center center;
}

.mat_filter.active, .mat_filter:hover{
    background:url("/images/mat_img_grey_active.png") no-repeat center center;
}
.chat_pic.robot{
    background:url("/images/robot_img.png") no-repeat center center;
}
.chat_pic.robot.active, .chat_pic.robot:hover{
    background:url("/images/robot_img_active.png") no-repeat center center;
}
.player_popup{
    background:url("/images/popup_img.png") no-repeat center center;
}
.player_popup.active, .player_popup:hover{
    background:url("/images/popup_img_active.png") no-repeat center center;
}
.options{
    background:url("/images/options_img_grey.png") no-repeat center center;
}
.options.active, .options:hover{
    background:url("/images/options_img_grey_active.png") no-repeat center center;
}
.smiles{
    background:url("/images/smiles_img_grey.png") no-repeat center center;
}
.smiles.active, .smiles:hover{
    background:url("/images/smiles_img_grey_active.png") no-repeat center center;
}
.poll,.poll2,.poll3{
    background:url("/images/poll_img_grey.png") no-repeat center center;
}
.poll.active, .poll:hover,.poll2.active, .poll2:hover,.poll3.active, .poll3:hover{
    background:url("/images/poll_img_grey_active.png") no-repeat center center;
}
.people_in_this_chat{
    float:right;
    margin-right:5px;
    font-size:12px;
    color:#fff;
    margin-top:4px;
    cursor:pointer;
}
.people_in_this_chat.active{

}
.people_in_this_chat .text > span {
    color: #3399ff;
    text-decoration:underline;
    cursor:pointer;
}
.click_user_popup.option_popup{
    bottom:49px;
    left:26px;
}
.click_user_popup.player{
    bottom:22px;
    left:26px;
}
.click_user_popup_header {
    background: none repeat scroll 0 0 #00234a;
    float: left;
    padding: 7px 0;
    text-align: left;
    text-indent: 15px;
    width: 100%;
}
.close_open_popup {
    background: url("/images/close_open_popup.png") no-repeat scroll 0 0 transparent;
    float: right;
    height: 10px;
    position: relative;
    right: 11px;
    top: 4px;
    cursor:pointer;
    width: 10px;
}
/*CHAT SMILES*/
.click_user_popup.smaili{
    bottom:49px;
    left:6px;
    width:240px;
    background-position: 96px bottom;
}
.chat_list_wrapper{
    height: 483px;
    float:left;
    width:240px;
    background:#0d1016;
}
.smaili .click_user_popup_wrapper {
    width: 240px;
    background: none repeat scroll 0 0 #0d1016;
    padding-bottom: 5px;
}
.group_smiles{
    float:left;
    padding:8px;
    width:240px;
}
.group_smiles_name{
    font-size:12px;
    color:#fff;
    width:100%;
    padding-bottom:4px;
}
.smiles_at_this_group{
    float:left;
    width:195px;
    margin-top:4px;
    padding-left:18px;
    padding-bottom: 8px;
}
#smiles table {
    min-width: 100%;
}
.smiles_at_this_group .chat_smiles{
    cursor:pointer;
}
.smiles_at_this_group td {
    text-align: center;
    vertical-align: middle;
}
.smiles_at_this_group .chat_smiles:hover{
    background:#0d335d;
}
/*NEWPOLL*/
.click_user_popup.golosovalka{
    bottom:49px;
    left:5px;
    width:240px;
    background-position:130px bottom;
}

.golosovalka .click_user_popup_wrapper{
    width:240px;
    padding-top: 0px;
    height:400px;
    background:#0d1016;
}
.golosovalka .checkboxes_wrapper {
    float: left;
    margin-left:0px;
    margin-top:0px;
}
.input_answers_block{
    float:left;
}
.opros_question{
    margin-top:11px;
    float:left;
    width:100%;
    margin-bottom:2px;
}
.golosovalka_podpis {
    float: left;
    margin-left: 25px;
    text-align: left;
    color:#fff;
    font-size:12px;
}
.golosovalka_podpis.input_podpis{
    position:absolute;
    z-index:3;
    left:-3px;
    top:6px;
    color:#666;
    font-size:12px;
}
.textarea_opros{
    background: none repeat scroll 0 0 #fff;
    border: 0 none;
    border-radius: 0;
    color: #666666;
    float: left;
    font-size: 12px;
    height: 51px;
    margin-bottom: 16px;
    margin-left: 16px;
    margin-top: 3px;
    padding: 11px;
    resize: none;
    width: 176px;
}
.answer_input{
    float:left;
    width:100%;
    position:relative;
    margin-top:10px;
}
.input_answer{
    float:left;
    width:198px;
    height:23px;
    margin-left:16px;
    border:0 none;
    border-radius:0px;
    text-indent:20px;
    font-size:12px;
    color:#666;
}
.add_answer{
    float:left;
    color:#0066cc;
    font-size:18px;
    width:198px;
    padding-top:3px;
    text-align:center;
    background:#3399ff;
    cursor:pointer;
    margin-bottom:10px;
    margin-top:10px;
    margin-left:15px;
}
.add_poll_submit{
    background: none repeat scroll 0 0 #14affb;
    border-radius: 2px;
    color: #fff;
    cursor: pointer;
    width:255px;
    height:31px;
    text-align:center;
    border:0 none;
    margin-bottom:9px;
}
/*VOTE POLL*/
.click_user_popup.vote_poll, .click_user_popup.poll_results {
    background-position: 130px bottom;
    bottom: 49px;
    left: 5px;
    width: 240px;
}
.vote_poll .click_user_popup_wrapper, .poll_results .click_user_popup_wrapper {
    background: none repeat scroll 0 0 #0d1016;
    height: 400px;
    padding-top: 0;
    width: 240px;
}
.vote_poll_question{
    color: #fff;
    float: left;
    font-size: 14px;
    margin-bottom: 8px;
    margin-left: 19px;
    margin-top: 15px;
}
.vote_poll_answer_block .checkboxes_wrapper{
    margin-left:15px;
    width:205px;
    margin-bottom:4px;
}
.vote_poll_answer_block .icheckbox_futurico_white {
    float: left;
    margin-right: -3px;
    margin-top:3px;
}
.vote_poll_answer_block  .checkboxes_wrapper label, .poll_answer{
    font-size:12px;
    line-height:18px;
}
.vote_poll_submit {
    background: none repeat scroll 0 0 #999999;
    border: 0 none;
    color: #666666;
    cursor:pointer;
    display: block;
    float: left;
    font-size: 18px;
    font-weight: bold;
    height: 36px;
    margin-left: 15px;
    margin-top: 5px;
    width: 203px;
}
.vote_poll_submit.blue {
    background:#3399ff;
    color:#0066cc;
}
/*POLL RESULTS*/
.graphics {
    border-bottom: 1px solid #333333;
    float: left;
    height: 80px;
    margin-left: 9px;
    width: 209px;
}

.vote_poll_answer_block {
    float: left;
    margin-left: 15px;
    margin-top: 24px;
}
.poll_answer.choosed{
    color:#3399ff;
}
.vote_poll_answer_block .poll_answer{
    margin-top:8px;
}
.poll_answer > span {
    font-size: 12px;
    font-weight: bold;
    margin-left: 5px;
    color:#fff;
}
.graphic_bar {
    float: left;
    margin-right: 9px;
    position:relative;
    width: 24px;
    height:80px;
}
.graph_bar{
    width: 24px;
    background:#fff;
    position:absolute;
    bottom:0px;
}
.graph_bar.choosed{
    background:#3399ff;
}
.graphic_bar .poll_answer_number{
    color:#666;
    font-size:12px;
    position:absolute;
    bottom:5px;
    display:block;
    text-align:center;
    width:24px;
}
.graphic_bar .poll_answer_votes{
    color:#fff;
    font-size:12px;
    position:absolute;
    bottom:-25px;
    display:block;
    text-align:center;
    width:24px;
}
/*USERS IN THAT LIST*/
.click_user_popup.who_is_in_chat{
    bottom:49px;
    left:5px;
    width:240px;
    background: url("/images/chat_arrow.png") no-repeat 235px bottom;
    display:none;
    height:435px;
}
.user_in_chat_wrapper{
    width:240px;
    background:#0d1016;
    float:left;
    position:relative;
    height:400px;
}
.user_in_chat_row{
    float:left;
    width:219px;
    padding:4px 0px 1px 12px;
    font-size:12px;
    color:#fff;
}
.user_in_chat_row:hover{
    background:#1e2b39;
}
/*ROOMS LIST*/
.all_rooms {
    background: none repeat scroll 0 0 rgba(0, 0, 0, 0.6);
    float: left;
    position: relative;
    width: 100%;
}
.all_rooms_wrapper {
    float: left;
    height: 501px;
    width: 915px;
}
/*the same styles as stream_preview*/

/*OTKRITIE KOMNATI*/

/*LEVII BLOCK*/
.open_room {
    float: left;
    margin-left: 15px;
    position: relative;
    width: 1169px;

}
.open_room .block_before_streams{
    width:100%;
    background:#000b1b;
}
.open_room .block_before_streams .text1, .open_room .block_before_streams .text2{
    color:#fff;
    float:left;
    max-width: 915px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    white-space: nowrap;
}
.open_room .block_before_streams .text2{
    clear:both;
}
.open_room_chat {
    float: left;
    width:910px;
    height:509px;
    background: #000b1b;
}
.open_room .block_before_streams .text3{
    display:block;
    float:left;
    color:#3399ff;
    font-size:12px;
    text-decoration:underline;
    cursor:pointer;
    margin-left:4px;
    margin-top:3px;
}

.room_creater_block{
    background:url("/images/room_creater_bg.png") repeat;
    float:left;
    width:910px;
}
.room_creater_name{
    float:left;
    width:892px;
    padding-top:7px;
    text-align:right;
    padding-right:8px;
}
.room_creater_block .text2{
    color:#fff;
    font-size:12px;
}
.room_creater_block .text4{
    color:#3399ff;
    font-size:12px;
}
.black_designed_block{
    float:right;
    background:#000b1b;
    width:10px;
    height:30px;
}
.open_room .top_room_header {
    margin-left:0px;
    width:100%;
}
.room_chat_wrapper {
    float: left;
    width: 100%;
}
.room_chat{
    float:left;
    background:url("/images/bg_chat.png") repeat;
    width:910px;
}
.room_chat_wrapper .top_userpage_stream_block{
    margin-top:19px;
}
.room_chat .chat_body{
    background:none;
    height:479px;
}

.room_chat .chat_wrapper{
    height:452px;
}
.room_chat .user_name{
    cursor: pointer;
    font-size: 12px;
    line-height: 13px;
    padding-right: 2px;
    color:#999999;
}
.chat_message .user_name.blue{
    color:#3399ff;
}
.room_chat .chat_buttons{
    width:120px;
    margin-top:0px;
    padding-bottom: 0;
}
.room_chat .chat_body .room_chat_form{
    width:790px;
}
.room_chat .chat_input{
    border-radius:0px;
    height:24px;
    width:100%;
    color:#666;
}
.room_chat .chat_images{
    width:120px;
    background:#e6e6e6;
    margin-left:0px;
    padding-top: 2px;
    height:25px;
}
.room_chat  .mat_filter {
    background: url("/images/mat_img_disabled.png") no-repeat scroll center center rgba(0, 0, 0, 0);
}
.room_chat  .mat_filter.active, .room_chat  .mat_filter:hover{
    background: url("/images/mat_img_enabled.png") no-repeat scroll center center rgba(0, 0, 0, 0);
}
.room_chat  .options {
    background: url("/images/options_img_disabled.png") no-repeat scroll center center rgba(0, 0, 0, 0);
}
.room_chat  .options.active, .room_chat  .options:hover {
    background: url("/images/options_img_enabled.png") no-repeat scroll center center rgba(0, 0, 0, 0);
}
.room_chat  .smiles {
    background: url("/images/smiles_img_disabled.png") no-repeat scroll center center rgba(0, 0, 0, 0);
}
.room_chat  .smiles.active,.room_chat  .smiles:hover {
    background: url("/images/smiles_img_enabled.png") no-repeat scroll center center rgba(0, 0, 0, 0);
}
.room_chat .poll,.room_chat .poll2, .room_chat .poll3 {
    background: url("/images/poll_img_disabled.png") no-repeat scroll center center rgba(0, 0, 0, 0);
}
.room_chat .poll.active,.room_chat .poll2.active, .room_chat .poll3.active, .room_chat .poll:hover,.room_chat .poll2:hover, .room_chat .poll3:hover {
    background: url("/images/poll_img_enabled.png") no-repeat scroll center center rgba(0, 0, 0, 0);
}
.room_chat .click_user_popup.smaili{
    width: 799px;
    left:14px;
}
.room_chat .smaili .click_user_popup_wrapper{
    width: 799px;
}
.room_chat  .chat_list_wrapper{
    height: auto;
    width: 799px;
}
.room_chat .smiles_at_this_group{
    width: 760px;
}
.room_chat  .golosovalka .click_user_popup_wrapper, .room_chat   .vote_poll .click_user_popup_wrapper, .room_chat   .poll_results .click_user_popup_wrapper{
    height:315px;;

}
.input_room_block{
    float:left;
    width:100%;
    background:#fff;
}

/*ROOM RIGHT BLOCK*/
.room_right_block {
    float: left;
    width: 259px;
    background:url("/images/room_right_block_bg.png") repeat;
}
.room_block_switcher {
    float: left;
    width: 100%;
}
.room_page_name {
    background: none repeat scroll 0 0 #0b2e55;
    float: left;
    font-size: 14px;
    padding: 6px 0 7px;
    text-align: center;
    width: 129px;
    cursor:pointer;
}
.room_page_name.active{
    background:#154980;
    width:130px;
}
.room_options_page {
    float: left;
    width: 100%;
    position:relative;
    height:479px;
}
.room_options_page .text2 {
    color: #fff;
    display: block;
    float: left;
    font-size: 12px;
    padding: 9px 10px 5px;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
}
.room_options_page .redact_room{
    color:#0066cc;
    font-size:18px;
    width:198px;
    background:#3399ff;
    height:27px;
    text-align:center;
    position:absolute;
    bottom:27px;
    cursor:pointer;
    left:31px;
    padding-top:2px;
}
.room_userlist_page {
    float: left;
    width: 100%;
    height:479px;
    display:none;
}
.room_userlist_page_wrapper{
    height:452px;
}
.room_users_block {
    float: left;
    width: 100%;
}
.room_users_block .slide_block {
    font-size: 12px;
    overflow: hidden;
    padding-bottom: 8px;
    padding-left: 15px;
    padding-top: 5px;
    position: relative;
}
.slide_block > span {
    background: url("/images/white_arrow.png") no-repeat scroll right 6px transparent;
    float: left;
    padding-right: 14px;
    position: relative;
    z-index: 3;
    cursor:pointer;
}
.slide_block > div {
    background: none repeat scroll 0 0 #053c74;
    height: 1px;
    float:left;
    margin-left:5px;
    margin-top: 6px;
    width: 100%;
    z-index: 2;
}
.room_block_userlist {
    float: left;
    width: 100%;
}
.room_block_userlist .username {
    float: left;
    padding: 3px 0 6px 15px;
    width: 236px;
    overflow:hidden;
    text-overflow: ellipsis;
    color:#3399ff;
    font-size:14px;
}
.room_block_userlist .username.leader{
    background:url("/images/leader.png") no-repeat 15px 8px;
    padding:3px 0 6px 30px;
}

.room_block_userlist .username:hover{
    background:#0b2e55;
}
.room_block_userlist .username.leader:hover{
    background:url("/images/leader.png") no-repeat  15px 8px #0b2e55;
    width:221px;
}
.room_users_block_counter {
    background: none repeat scroll 0 0 #000b1b;
    color: #fff;
    float: left;
    font-size: 12px;
    padding-top: 8px;
    text-align: center;
    width: 100%;
    padding-bottom: 4px;
}

/*ANOUNSES*/
.bottom_media_zone{
    width:1200px;
    float:left;
}
.bottom_media_zone .stick{
    top:43px;
    left:-10011px;
}
.first_line_an{
    position:absolute;
    background:url("/images/first_line_an.png") no-repeat;
    top:24px;
    left:-13px;
    width:72px;
    height:34px;
}
.second_line_an{
    position:absolute;
    background:url("/images/second_line_an.png") no-repeat;
    top:11px;
    left:108px;
    width:223px;
    height:16px;
}
.third_line_an{
    position:absolute;
    background:url("/images/third_line_an.png") no-repeat;
    top:24px;
    left:382px;
    width:223px;
    height:3px;
}
.fourth_line_an{
    position:absolute;
    background:url("/images/third_line_an.png") no-repeat;
    top:25px;
    left:656px;
    width:223px;
    height:3px;
}
.fifth_line_an{
    position:absolute;
    background:white;
    top:26px;
    left:929px;
    width:10003px;
    height:1px;
}
.stream_anounses{
    float:left;
    width:1184px;
    position:relative;
    margin-top:9px;
}
.rasp_text{
    color:#fff;
    font-size:16px;
    float:left;
    clear:both;
    margin-bottom:1px;
}
.the_hardest_part{
    width:100%;
    height:188px;
    position:relative;
    float:left;
}

.the_hardest_part_wrapper{
    float: left;
    margin-left: 34px;
    width: 820px;
}
.prev_raspisanie{
    float:left;
    background:url("/images/left_raspis_arrow.png") no-repeat;
    width:32px;
    height:72px;
    cursor:pointer;
    margin-top:44px;
    left: 23px;
    position:relative;
}
.prev_raspisanie.disabled, .next_raspisanie.disabled{
    display: block !important;
    visibility:hidden;
}
.next_raspisanie{
    float:right;
    height: 72px;
    margin-top: 45px;
    width: 24px;
    background:url("/images/right_raspis_arrow.png") no-repeat;
    cursor:pointer;
    position: relative;
    right: 9px;
}
.time_now{
    float:left;
    display:none;
    margin-left:17px;
    width:97px;
    height:53px;
    margin-top:68px;
    background:rgba(0,0,0,0.6);
    border-radius:4px;
    margin-right:15px;
    z-index:4;
    position:relative;
}
.time_now.nowadays{
    display:block;
}
.time_now .now{
    color:#fff;
    font-weight:bold;
    font-size:24px;
    display:block;
    float:left;
    width:97px;
    text-align:center;
}
.gmt{
    font-size:10px;
    color:#fff;
    display:block;
    float:left;
    width:97px;
    text-align:center;
}
.time_now .bottom_arrow{
    background:url("/images/light_blue_top_arrow.png") no-repeat;
    width:31px;
    height:16px;
    position:absolute;
    left:28px;
    bottom:-32px;
}
.straight_down{
    float:left;
    position:relative;
    left:11px;
    z-index:4;
    border-left:1px solid #fff;
}
.point{
    background: url("/images/point.png") no-repeat scroll 0 0 rgba(0, 0, 0, 0);
    float: left;
    height: 11px;
    left: -6px;
    position: relative;
    top: -6px;
    width: 11px;
    z-index: 4;
}
.one_time_block{
    width:265px;
    float:left;
    height:135px;
    position: relative;
    margin-top:16px;
    margin-right: 8px;
}
.anounsed_time{
    float:left;
    width:42px;
    font-size:14px;
    color:#cccccc;
    text-decoration:underline;
}
.streams_at_this_time{
    width:265px;
    position:relative;
    z-index:2;
    float:left;
}
.stream_row{
    float:left;
    width:265px;
    position:relative;
    color:#fff;
}
.stream_row:hover{
    background:rgba(255,255,255,0.15);
}
.stream_row.active{
    background:rgba(255,255,255,0.15);
}
.stream_row .stream_name{
    display: block;
    float: left;
    font-size: 12px;
    padding-bottom: 6px;
    padding-top: 5px;
    width: 230px;
    padding-left:5px;
}
.stream_row .stream_name span{
    color:#5bd296;
    font-size:12px;
    font-weight:bold;
    text-transform:uppercase;
}
.stream_row .stream_name.video{
    background:url("/images/video.png") no-repeat left center;
    padding-left:20px;
}
.stream_row .online.true{
    position:absolute;
    top:3px;
    right:3px;
    width:6px;
    height:6px;
    background:url("/images/little_red_button.png") no-repeat;
}
.icheckbox_dark_blue{
    position:absolute;
    display:none;
    margin:0px;
    padding: 0;
    right:0px;
    width: 28px;
    height: 15px;
    background: url("/images/white_checkbox_unchecked.png") center center no-repeat rgba(255,255,255,0.4);
    border: none;
    cursor: pointer;
}

.stream_row.active .icheckbox_dark_blue{
    display:block !important;
}
.checkbox_hint{
    position:absolute;
    background:rgba(0,0,0,0.8);
    bottom:-17px;
    right:0px;
    display:none;
    z-index:3;
}
.arrow_black_top{
    background:url("/images/arrow_top_black.png") no-repeat;
    float:left;
    position:absolute;
    right:12px;
    top:-5px;
    width:5px;
    height:5px;
}
.checkbox_hint .text{
    color:#fff;
    font-size:12px;
    padding:4px 5px 5px 10px;
}
.podloshka_raspisanie{
    width:100%;
    position:absolute;
    bottom:9px;
    height:24px;
    opacity:0.7;
    background:#000;
    border-top:3px solid #3d7a9e;
}
/*CONTENT PART*/
#wrapper_content {
    background:#fff;
    color: #333333;
    float: left;
    min-width: 1200px;
    width: 100%;
}
#content_part{
    width:1200px;
    margin:0 auto;
}
/*CONTENT MENU*/
.content_grey_block {
    background: none repeat scroll 0 0 #eef1f7;
    float: left;
    margin-top: 40px;
    width: 100%
}
.content_streams_menu{
    float:left;
    width:100%;
    background: none repeat scroll 0 0 #fff;
    padding-top: 9px;
}
.content_streams_menu .site_filter .right_menu{
    width:761px;
    margin-right:0px;
}
.content_streams_menu .site_filter .left_menu_column_text{
    margin-top:21px;
    margin-right:0px;
}
.content_streams_menu .site_filter .left_menu_column_text span.first {
    font-size: 12px;
}
.content_streams_menu .site_filter .left_menu_column_text span.active, .content_streams_menu .site_filter .left_menu_column_text span.active span {
    color: #000b1b;
}
.content_streams_menu  .site_filter .left_menu_column_text span {
    color:#999999;
    line-height:19px;
    padding-left:5px;
}
.content_streams_menu .site_filter  .left_menu_column_text span span{
    color:#ff9999;
    display: inline;
    float: none;
    padding-left:0px;
}
.content_streams_menu  .stick {
    background: #000b1b;
    height:1px;
}
.content_streams_menu .first_topmenu_line{
    background: url("/images/first_line_static_content.png") no-repeat scroll 0 0 rgba(0, 0, 0, 0);
    top:29px;
    left:-13px;
}

.content_streams_menu .first_topmenu_line.active{
    background: url("/images/first_line_content.png") no-repeat scroll 0 0 rgba(0, 0, 0, 0);
    z-index:3;
    left:-23px;
}

.content_streams_menu .second_topmenu_line{
    background: url("/images/second_line_static_content.png") no-repeat scroll 0 0 rgba(0, 0, 0, 0);
    top:47px;
    left:-23px;
}

.content_streams_menu .second_topmenu_line.active{
    background: url("/images/second_line_content.png") no-repeat scroll 0 0 rgba(0, 0, 0, 0);
    z-index:3;
}

.content_streams_menu .third_topmenu_line{
    background: url("/images/third_line_static_content.png") no-repeat scroll 0 0 rgba(0, 0, 0, 0);
    top:40px;
    left:-22px;
}

.content_streams_menu .third_topmenu_line.active{
    background: url("/images/third_line_content.png") no-repeat scroll 0 0 rgba(0, 0, 0, 0);
    z-index:3;
}

.content_streams_menu .fourth_topmenu_line{
    background: url("/images/fourth_line_static_content.png") no-repeat scroll 0 0 rgba(0, 0, 0, 0);
    height: 41px;
    left: -23px;
    position: absolute;
    top: 48px;
    width: 48px;
}
.content_streams_menu .fourth_topmenu_line.active{
    background: url("/images/fourth_line_content.png") no-repeat scroll 0 0 rgba(0, 0, 0, 0);
    z-index:3;
}

.content_streams_menu .first_cat_level, .content_streams_menu .second_cat_level, .content_streams_menu .third_cat_level{
    float:left;
    width:100%;
    background:#d6ebff;
    border-radius:0px;
    margin-bottom: 10px;
    color:#000b1b;
}
.content_streams_menu .cifri{
    opacity: 1;
    color:#fff;
    background:#000b1b;
    margin-top:-45px;
    margin-right:15px;
}
.content_streams_menu .cifri_wrapper{
    background:none;
    width:147px;
}
.content_streams_menu a{
    color:#000b1b;
    font-size:16px;
    display:block;
    float:left;
    border-radius:0px;
    margin-right: 0px;
    width:147px;
}
.content_streams_menu .site_filter .second_cat_level a,.content_streams_menu  .site_filter .third_cat_level a{
    padding:2px 0 5px;
    color:#000b1b;
    font-size:16px;
}
.content_streams_menu .first_cat_level a{
    font-size:24px;
}
.content_streams_menu  .site_filter .first_cat_level a {
    padding:5px 0;
}
.content_streams_menu .first_cat_level .cifri_wrapper.active a , .content_streams_menu .second_cat_level .cifri_wrapper.active a , .content_streams_menu .third_cat_level .cifri_wrapper.active a {
    background:#3399ff;
    color:#fff;
    margin-right:11px;
}
.content_menu_create{
    float: left;
    margin-left: 41px;
    margin-top: 44px;
    width: 250px;
    position:relative;
}
button.create_content_but{
    font-size:18px;
    font-weight:bold;
    text-transform:uppercase;
    width:237px;
    text-align:center;
    padding:14px 0;
    border-radius:2px;
    background:#3399ff;
    color:#fff;
    cursor:pointer;
    margin-bottom:10px;
    border:0 none;
}
.content_menu_create .some_plus{
    position:absolute;
    right:1px;
    top:-18px;
    font-size:18px;
    color:#3399ff;
}
.content_menu_create .text {
    color: #000b1b;
    display: block;
    font-size: 12px;
    margin-top: 6px;
    text-align: center;
    width: 100%;
}
a.my_news {
    color: #3399ff;
    float: left;
    font-size: 16px;
    margin-top: 10px;
    text-align: center;
    text-decoration: underline;
    width: 100%;
}
.content_menu_create .text span {
    cursor: pointer;
    color:#3399ff;
    text-decoration: underline;
}
/*CONTENT MAIN*/
.content_main_block{
    float:left;
    width: 1200px;
    margin-top: 35px;
}
.content_main_block .left_column{
    width:915px;
    padding-left:4px;
    min-height:353px;
}

/*NORMAL ONE*/
.news_block{
    float:left;
    width:269px;
    margin-right:14px;
    margin-bottom:57px;
    height:353px;
    padding:7px 10px  8px;
}
.news_block:hover{
    background:#e8eef4;
}
.news_block .top_news_part{
    float:left;
    width:100%;
    margin-bottom:5px;
}
.news_block .news_datetime{
    float:left;
    color:#000b1b;
    font-size:12px;
}
.news_block .news_rating_place{
    display:block;
    background:url("/images/blue_arrow_up.png") no-repeat left center;
    padding-left:11px;
    color:#000b1b;
    font-size:12px;
    float:right;
    margin-right: 9px;
}
.news_block .news_comments_number{
    display:block;
    background:url("/images/blue_comment.png") no-repeat left center;
    padding-left:12px;
    color:#000b1b;
    font-size:12px;
    float:right;
    margin-right:15px;
}
.news_block .news_image_block{
    float:left;
    position:relative;
    width:269px;
    height:202px;
}
.news_block .news_image_block img{
    float:left;
    width:269px;
    height:202px;
}
.news_image_block  .news_category{
    position:absolute;
    right:0px;
    bottom:0px;
    padding-left:8px;
    background:url("/images/blue_tringle.png") no-repeat left center;
}
.news_image_block  .news_category span{
    font-size:14px;
    display:block;
    color:#fff;
    background:#109bff;
    padding:3px 6px 5px 5px;
}
.news_block .news_preview_block {
    float: left;
    margin-top: 7px;
}
.news_block .news_article_name{
    float:left;
    color:#000b1b;
    font-size:16px;
    max-height:38px;
    height:38px;
    overflow:hidden;
    width:269px;
    line-height:18px;
}
.news_block .preview_text{
    color:#000b1b;
    font-size:12px;
    height:59px;
    overflow:hidden;
    width:269px;
    word-wrap: break-word;
}
.news_block .preview_text a{
    color:#3399ff;
    font-size:12px;
    text-decoration:underline;
}

.news_block .authors{
    float:right;
    margin-top:12px;
    color:#000b1b;
    font-size:12px;
}
.news_block .authors a{
    color:#66ccff;
    font-size:12px;
}

/*SELECT NEWS*/
.show_all_news{
    clear:both;
    float:left;
    font-size:14px;
    color:#3399ff;
    margin-left:9px;
}
.best_filter1,.best_filter2{
    float:left;
    margin-top:19px;
}
.best_filter1{
    margin-top:4px;
}
.show_all_news p{
    float:left;
    text-decoration:underline;
}
.articles_show_filter{
    float:left;
    margin-left:9px;
    margin-top:5px;
}
.show_all_news span{
    display:block;
    float:left;
    padding-left:7px;
    border-left:1px solid #000b1b;
    cursor:pointer;
    text-decoration:underline;
    height:10px;
    line-height:9px;
    margin-right:10px;
}
.show_all_news span.selected{
    color:#000b1b;
    text-decoration:none;
}
/*BEST MATERIALS*/
.content_main_block  .right_column{
    width:280px;
    margin-left:0px;
}
.right_header{
    font-size:18px;
    color:#000b1b;
    display:block;
    float:left;
    width:100%;
    margin-bottom:5px;
    padding-left:10px;
}
.material_list_switcher{
    width:100%;
    float:left;
    height:29px;
    margin-left:10px;
}
.list_switcher{
    color:#fff;
    font-size:14px;
    position:relative;
    cursor:pointer;
    background:#85c2ff;
    width:129px;
    display:block;
    float:left;
    text-align:center;
    height:30px;
    line-height:29px;
}
.list_switcher:first-child {
    border-right: 1px solid #98ccff;
}
.active.list_switcher{
    color:#fff;
    background:#5cadff;
    font-size:14px;
}

.material_list{
    float:left;
    width:100%;
    height:819px;
}
.material_list_row{
    float:left;
    width:260px;
    padding:5px 9px;
    margin-top:7px;
    margin-bottom:5px;
}
.material_list_row:hover{
    background:#e8eef4;
}
.material_list_top{
    float:left;
    margin-top:1px;
    width:100%;
    margin-bottom:6px;
}
.material_list_top .name{
    color: #3399ff;
    float: left;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 170px;
}
.article_rating_place {
    background: url("/images/blue_arrow_up.png") no-repeat scroll left center rgba(0, 0, 0, 0);
    color: #000b1b;
    display: block;
    float: right;
    font-size: 12px;
    margin-right: 9px;
    padding-left: 11px;
}
.article_comments_number {
    background: url("/images/blue_comment.png") no-repeat scroll left center rgba(0, 0, 0, 0);
    color: #000b1b;
    display: block;
    float: right;
    font-size: 12px;
    padding-left: 14px;
}
.material_list_body{
    float:left;
    width:100%;
    margin-bottom:6px;
}
.the_best_articles_img{
    float:left;
    width:52px;
    position:relative;
    margin-right:8px;
    height:39px;
    font-size:8px;
}
.the_best_articles_img img{
    width:52px;
    height:39px;
}
.material_list_body .position{
    display:block;
    color:#fff;
    font-size:10px;
    background:#3399ff;
    padding:2px 3px 1px 3px;
    top:0px;
    right:0px;
    position:absolute;
}
.material_list_body .article_header{
    color:#000b1b;
    font-size:12px;
    word-wrap: break-word;
    display:block;
    float:left;
    width:199px;
    display:block;
    max-height:31px;
    overflow:hidden;
}
.the_best_prev_page{
    background: url("/images/up_rating.png") no-repeat scroll 0 0 rgba(0, 0, 0, 0);
    cursor: pointer;
    float: left;
    height: 23px;
    width: 35px;
    margin-right:3px;
    margin-top:4px;
    margin-left:105px;
}
.the_best_next_page{
    background: url("/images/down_rating.png") no-repeat scroll 0 0 rgba(0, 0, 0, 0);
    cursor: pointer;
    float: left;
    height: 23px;
    width: 35px;
    margin-top:4px;
}
/*OPEN NEWS WRAPPER*/
.conenten_main_news_block{
    width:1200px;
    float:left;
    background:#fff;
    margin-top:30px;
}
.conenten_main_news_block .left_block{
    width:840px;
    float:left;
}
.open_news_header {
    margin-top: 27px;
}
.open_news_header,.conenten_main_news_block .first_block,.conenten_main_news_block .second_block {
    float: left;
    width: 100%;
}

.znak{
    display:block;
    float:left;
    margin:4px;
    margin-top:30px;
}
.article_wrapper{
    float:left;
    width:100%;
}
.article_text{
    clear:both;
    color: #333333;
    float: left;
    font-size: 16px;
    line-height: 20px;
    padding: 33px 0px 0;
    word-wrap: break-word;
}

.article_text img {
    margin: 10px 0;
}
.article_text p {
    margin: 12px 0;
}
.lots_of_text p, .lots_of_text div {
    margin-bottom:20px;
    word-wrap: break-word;
}
.article_name{
    float:left;
    max-width:591px;
    display:block;
    font-size:26px;
    color:#000b1b;
    padding-left:7px;
    line-height:29px;
}
.redact_article_link{
    display:block;
    width:40px;
    height:40px;
    background:url("/images/edit_pencil.png") no-repeat;
    float:left;
    margin-top: -3px;
}
.second_block {
    margin-top: 17px;
    margin-bottom:26px;
}
.news_rating_block {
    float: right;
    margin-right: 6px;
    position:relative;
}
.news_rating_block .how_much_left_popup{
    left:0px;
    top:-35px;
}
.comment_rating_wrapper  .how_much_left_popup{
    left:-109px;
    top:21px;
    padding-bottom:0px;
    padding-top:4px;
}
.news_rating_block .how_much_left, .comment_rating_wrapper .how_much_left{
    background:#1ea8e4;
    width:168px;
    padding:8px 0;
}

.news_rating_block .article_rating > input {
    border:1px solid #5cadff;
    color: #333333;
    font-size: 14px;
    height: 26px;
    padding-right: 5px;
    text-align: right;
    width: 71px;
    margin:0 -2px;
}
.article_comment_rating  > input{
    border:1px solid #5cadff;
    color: #333333;
    font-size: 14px;
    height: 26px;
    padding-right: 5px;
    text-align: right;
    width: 50px;
}
.article_rating,.article_comment_rating{
    display:none;
    /*position: absolute;*/
    top: -30px;
}
.news_rating_block .how_much_left_popup.plus{
    background: url("/images/arrow_down_blue.png") no-repeat scroll 19px 30px rgba(0, 0, 0, 0);
    display: block;
}
.comment_rating_wrapper .how_much_left_popup.plus{
    background: url("/images/arrow_up_blue.png") no-repeat scroll 120px 0px rgba(0, 0, 0, 0);
    display: block;
}
.news_rating_block .how_much_left_popup.minus {
    background: url("/images/arrow_down_blue.png") no-repeat scroll 142px 30px rgba(0, 0, 0, 0);
    display: block;
}
.comment_rating_wrapper .how_much_left_popup.minus {
    background: url("/images/arrow_up_blue.png") no-repeat scroll 149px 0px rgba(0, 0, 0, 0);
    display: block;
}
.conenten_main_news_block  .up_rating{
    background: url("/images/big_up_rating.png") no-repeat scroll 0 0 rgba(0, 0, 0, 0);
    height: 30px;
    width: 45px;
    border-right:2px solid #afd7ff;
}
.conenten_main_news_block  .down_rating{
    background: url("/images/big_down_rating.png") no-repeat scroll 0 0 rgba(0, 0, 0, 0);
    height: 30px;
    width: 46px;
}
.conenten_main_news_block  .up_rating.selected{
    background: url("/images/big_up_rating_selected.png") no-repeat scroll 0 0 rgba(0, 0, 0, 0);
    border-right:2px solid #26b0ee;
}
.conenten_main_news_block  .down_rating.selected{
    background: url("/images/big_down_rating_selected.png") no-repeat scroll 0 0 rgba(0, 0, 0, 0);
}
.conenten_main_news_block .today_rating{
    color:#fff;
    font-size:18px;
    border-right:1px solid #afd7ff;
    height:26px;
    background:#26b0ee;
    padding:4px 16px 0 16px;
    margin:0 -2px;
    width:auto;
}
.news_author {
    color: #333333;
    float: left;
    font-size: 14px;
    margin-left: 7px;
}
.news_author > span {
    color: #3399ff;
    text-decoration: underline;
}
.news_date_creation {
    float: right;
    margin-right: 9px;
    color:#333333;
    font-size:14px;
}
.article_wrapper > img {
    float: left;
    max-width: 833px;
}
.lots_of_text{

}
.article_wrapper ul{
    list-style:inside;
}
.shareBar_wrapper{
    float:left;
    text-align:center;
    margin-left:325px;
}
.vk_share{
    background:url("/images/vk.png") no-repeat;
    display:block;
    float:left;
    width:49px;
    height:34px;
    margin-right: 22px;
}
.vk_share:hover{
    background:url("/images/vk_active.png") no-repeat;
}
.tw_share{
    background:url("/images/tw.png") no-repeat;
    display:block;
    float:left;
    width:49px;
    height:34px;
    margin-right:20px;
}
.tw_share:hover{
    background:url("/images/tw_active.png") no-repeat;
}
.fb_share{
    background:url("/images/fb.png") no-repeat;
    display:block;
    float:left;
    width:37px;
    height:36px;
}
.fb_share:hover{
    background:url("/images/fb_active.png") no-repeat;
}
.article_comments_wrapper{
    float:left;
    width:100%;
    position:relative;
    margin-top:20px;
}
.header_comments{
    background:#d6ebff;
    float:left;
    width:100%;
}
.header_comments .comment{
    font-size:16px;
    float:left;
    color:#fff;
    background:#3399ff;
    padding:10px 15px 11px 17px;
}
.raiting_commentarii{
    color:#666;
    float:left;
    font-size:12px;
    padding-top:3px;
}
.raiting_commentarii span{
    color:#339966;
    font-size:12px;
}
.artcicle_filter {
    float: right;
    margin-right: 21px;
    margin-top: 9px;
}
.artcicle_filter .checkboxes_wrapper{
    margin-left:24px;
}
.artcicle_filter .checkboxes_wrapper label {
    cursor: pointer;
    margin-left: 6px;
    font-size:14px;
    color:#000b1b;
}
.conenten_main_news_block .right_block{
    float: left;
    margin-left: 38px;
    width: 291px;
}
.article_comment_row{
    float:left;
    padding: 19px 0px 14px 20px;
    width:820px;
}
.comment_hover_left_border{
    position:absolute;
    width:14px;
    background:#d6ebff;
    left: -26px;
    display:none;
}
.user_comment_wrapper {
    float: left;
    width: 93.17%;
    position:relative;
}
.user_comment_wrapper > img {
    float: left;
    width:50px;
    height:50px;
}
.article_comment_row .article_comment_row {
    padding: 19px 0px 0px 30px;
    border-bottom:0px;
    width:96%;
}
.article_comment_row .article_comment_row  .article_comment_row{
    width:95.5%;
}
.article_comment_row .article_comment_row .article_comment_row .article_comment_row .article_comment_row{
    width:95.4%;
}
.article_comment_row .article_comment_row .article_comment_row .article_comment_row  .article_comment_row .article_comment_row{
    padding-left:0px;
    width:100%;
}
.article_comment_row .article_comment_row .comment_rating_wrapper{
    right:-47px;
}
.article_comment_row .article_comment_row .article_comment_row  .comment_rating_wrapper{
    right:-50px;
}
.article_comment_row .article_comment_row .article_comment_row .article_comment_row  .comment_rating_wrapper{
    right:-51px;
}
/*
.article_comment_row:hover{
background:#d0d5e0;
}
.article_comment_row .article_comment_row :hover{
background:url("/images/comment_answer.png") no-repeat 0 31px #d0d5e0;
}
*/
.user_comment_text {
    float: left;
    padding-left: 9px;
    width: 90%;
    margin-top:-4px;
}
.article_comment_row .article_comment_row .user_comment_text {
    width:90%;
}
.article_comment_row .article_comment_row .article_comment_row .user_comment_text {
    width:89%;
}
.article_comment_row .article_comment_row .article_comment_row  .article_comment_row .user_comment_text {
    width:88%;
}
.user_comment_options {
    float: left;
    margin-left: 59px;
    margin-top:10px;
    visibility:hidden;
}
.user_comment_text a{
    font-size:16px;
    color:#3399ff;
    text-decoration:underline;
    margin-bottom: 2px;
}
.user_comment {
    color:#333333;
    font-size:14px;
    line-height: 14px;
    word-wrap: break-word;
}
.comment_rating_wrapper {
    position: absolute;
    right: -46px;
    top: 29px;
}
.comment_rating_wrapper  .up_rating{
    background:url("/images/small_up_rating.png") no-repeat;
    width:28px;
    height:19px;
    float:left;
    cursor:pointer;
    visibility:hidden;
}
.comment_rating_wrapper  .up_rating.selected{
    background:url("/images/small_up_rating_active.png") no-repeat;
}
.comment_rating_wrapper .down_rating{
    background:url("/images/small_down_rating.png") no-repeat;
    width:28px;
    height:19px;
    float:left;
    cursor:pointer;
    visibility:hidden;
}
.comment_rating_wrapper  .down_rating.selected{
    background:url("/images/small_down_rating_active.png") no-repeat;
}
.total_comment_rating{
    font-size:18px;
    position:absolute;
    display:block;
    width:56px;
    text-align:center;
    top:-25px;
    left:0px;
}
.total_comment_rating.up{
    color:#41a374;
}
.total_comment_rating.down{
    color:#cb3b45;
}
.left_float {
    float: left;
    font-size: 14px;
    position:relative;
}
.left_float .answer_comment{
    padding-right:18px;
    cursor:pointer;
    color:#3399ff;
    border-right:1px solid #000b1b;
    height:8px;
    line-height:6px;
}

.enter_comment {
    float: left;
    padding-top: 46px;
    padding-left: 20px;
    width:98.5%;
}
.enter_comment .text {
    color: #333333;
    float: left;
    font-size: 16px;
    margin-bottom:10px;
}
.enter_comment   img {
    float:left;
}
.enter_comment > form {
    width: 100%;
    position:relative;
}
.arrow_textarea{
    position:absolute;
    left:58px;
    top:8px;
    background:url("/images/strelka.png") no-repeat;
    width:8px;
    height:15px;
}
.comment_textarea{
    resize: none;
    color:#666666;
    font-size:14px;
    padding:8px 13px;
    height:54px;
    width:86.1%;
    border:1px solid #cccccc;
    border-radius:2px;
    background:#f5f5f5;
    margin-left: 15px;
    margin-bottom: 10px;
}
.float_right{
    float:right;
    position:relative;
}
.float_right .smiles_img{
    display:block;
    width:20px;
    height:20px;
    background:url("/images/smiles_img_disabled.png") no-repeat;
    float:left;
    margin-right: 10px;
    margin-top: 5px;
    cursor:pointer;
}
.float_right .smiles_img:hover{
    background:url("/images/smiles_img_enabled.png") no-repeat;
}
.blue_submit{
    background: none repeat scroll 0 0 #3399ff;
    border: 0 none;
    border-radius: 0px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    height: 30px;
    width: 96px;
    margin-right: 10px;
}
.enter_comment .click_user_popup2 {
    border: 1px solid #cecece;
    background: url("/images/arrow_down_white.png") no-repeat 511px bottom;
    padding-bottom: 0px;/*temporary no arrow*/
    width: 632px;
    left:-508px;
    bottom:35px;
    padding-top: 5px;
    position: absolute;
    z-index: 4;
    display:none;
}
.enter_comment .click_user_popup_wrapper2 {
    background: none repeat scroll 0 0 #f5f5f5;
    float:left;
    width: 632px;

}
.enter_comment .chat_list_wrapper2{
    float:left;
    width: 632px;
}
.enter_comment .smiles_at_this_group {
    width: 600px;
    overflow:hidden;
}

.enter_comment  .smiles_at_this_group .chat_smiles:hover{
    background:#999999;
}
.popup_smiles_navigation {
    float: left;
}
.popup_smiles_navigation > ul {
    bottom: 5px;
    float: left;
    position: absolute;
    right: 0;
}

.popup_smiles_navigation li a {
    background: none repeat scroll 0 0 #cccccc;
    color: #fff;
    cursor: pointer;
    float: left;
    font-size: 14px;
    height: 19px;
    list-style: outside none none;
    margin-right: 5px;
    text-align: center;
    width: 22px;
}
.popup_smiles_navigation li a:hover,.popup_smiles_navigation li a.selected {
    background:#999999;
    cursor:pointer;
}
.chat_body .popup_smiles_navigation li a {
    background: #00234a;
}
.chat_body .popup_smiles_navigation li a:hover,.chat_body .popup_smiles_navigation li a.selected {
    background: #3399ff;
}
.popup_smiles_navigation li a{
    color: #fff;
}

.enter_comment .close_open_popup2{
    background:url("/images/close1.png") no-repeat;
    right:0px;
    top:0px;
    width:19px;
    height:18px;
    position:absolute;
    cursor: pointer;
}
.enter_comment .close_open_popup2:hover{
    background:url("/images/close_active.png") no-repeat;
}
/*CREATE NEWS*/
.create_news{
    width:100%;
    float:left;
}
.header_main{
    color:#666;
    width:100%;
    float:left;
    display:block;
    font-size:28px;
    margin-bottom: 23px;
}
.create_news_wrapper{
    float:left;
    width:100%;
}
.create_news_block{
    float:left;
    width:100%;
    margin-bottom:13px;
}
.podpis{
    display:block;
    float:left;
    font-size:16px;
    color:#666666;
    text-align: right;
    width: 140px;
    padding-top: 6px;
    margin-right:10px;
}
.create_news_input{
    float:left;
    border:1px solid #cfd7e4;
    height:30px;
    background:url("/images/linear-gradien_grey.png") repeat-x;
    text-indent:15px;
    font-size:14px;
    color:#666;
    width:685px;
}
.anonimnost_wrapper {
    float: right;
    margin-right:77px;
}
.anonimnost{
    float:right;
    clear: right;
    margin-bottom: 14px;
}
.anonimnost .icheckbox_dark_blue2{
    display:block;
    float:right;
    position:relative;
}
.anonimnost .podpis{
    float:right;
    width:300px;
    text-align:right;
    margin-right: 22px;
}
.icheckbox_dark_blue2{
    position:absolute;
    display:none;
    margin:0px;
    padding: 0;
    right:0px;
    width: 15px;
    top:9px;
    height: 15px;
    background: url("/images/unchecked_dark_blue_checkbox.png") no-repeat;
    border: none;
    cursor: pointer;
}
.icheckbox_dark_blue2.checked{
    background: url("/images/dark_blue_checkbox.png") no-repeat;
}
.create_news_textarea .podpis{
    text-align:left;
    padding-left:12px;
}
.for_redactor{
    background: none repeat scroll 0 0 #fbfcfd;
    border: 1px solid #cfd7e4;
    border-radius: 1px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4) inset;
    color: #666666;
    font-size: 15px;
    height: 398px;
    margin-bottom: 22px;
    margin-left: 15px;
    margin-top: 15px;
    padding: 15px 11px;
    resize: none;
    width: 800px;
}
.create_news_textarea {
    float: left;
}
.create_article_submit{
    width:135px;
    border:1px solid #cfd7e4;
    color:#fefeff;
    font-size:18px;
    border-radius:2px;
    text-align:center;
    background:#3399cc;
    height:26px;
    cursor:pointer;
}
.create_article_clear{
    width:135px;
    border:1px solid #793239;
    color:#fefeff;
    height:26px;
    font-size:18px;
    border-radius:2px;
    text-align:center;
    background:#e8394a;
    cursor:pointer;
}
.create_news_textarea .float_right{
    margin-top: 20px;
}
.change_news_log {
    float: left;
}
.change_news_log .podpis{
    text-align: left;
    padding-left:15px;
    width:100%;
    margin-bottom:2px;
}
.changer_name{
    color:#ff3333;
    padding-right:3px;
    font-size:14px;
}
.chenged_date{
    font-size:14px;
    color:#666;
}

.changer_row {
    float: left;
    width: 100%;
    margin-left: 15px;
}
/*SSANIE SOVETI PO SOZDANIU STATI*/
.soveti_wrapper{
    float:left;
    font-size:14px;
    color:#666;
}
.soveti_row{
    width:256px;
    padding:18px 9px 21px;
    border-bottom:1px solid #cccccc;
    text-indent:35px;
}
/*FORGET PASSWORD POPUP*/
.forgot_password_popup,.check_password_popup {
    display: none;
    left: 0;
    right:0;
    bottom:0;
    position: absolute;
    top: 0;
    z-index: 20;
    width:486px;
    margin:auto;
}
.check_password_popup{
    display:block;
}
.forgot_wrapper{
    width:486px;
    background:#e0dfe1;
    overflow:hidden;
    box-shadow:0 0 10px rgba(0,0,0,0.5);
    border-radius: 2px;
    border:1px solid #ababab;
    height:239px;
    position:relative;

}
.forgot_password_popup .top_tab_registr,.check_password_popup .top_tab_registr{
    padding-right:44px;
    background:#0d87d0;
    float:left;
    border-radius:4px;
    border-bottom-left-radius:0;
    border-bottom-right-radius:0;
}

.forgot_password_popup .close_btn ,.check_password_popup .close_btn{
    background: url("/images/close.png") no-repeat scroll 0 0 rgba(0, 0, 0, 0);
    cursor: pointer;
    display: block;
    float: right;
    height: 34px;
    position: relative;
    left: 7px;
    top: -231px;
    width: 34px;
}
.forgot_wrapper > form {
    margin-top: 37px;
}
#check_pass_form > label ,#forgot_pass_form > label {
    color: #545454;
    float: left;
    font-size: 16px;
    margin-left: 60px;
    margin-top:10px;
}
.forget_pass_input {
    margin-left: 8px;
    border-radius:2px;
    border:1px solid #ababab;
    height:35px;
    width:296px;
    padding-left:15px;
    color:#545454;
    font-size:14px;
}

.hint_forget_password {
    color: #545454;
    float: left;
    font-size: 12px;
    margin-left: 118px;
    margin-top: 5px;
}
.submit_button_forgot_password{
    background: url("/images/registr_button.png") no-repeat scroll 0 0 rgba(0, 0, 0, 0);
    color: #084a6d;
    cursor: pointer;
    font-size: 22px;
    font-weight: bold;
    height: 62px;
    margin-left: 111px;
    margin-top: 40px;
    text-transform: uppercase;
    width: 279px;
    border:0 none;
}
.submit_button_forgot_password:hover{
    background: url("/images/send_hover.png") no-repeat scroll 0 0 rgba(0, 0, 0, 0);
    color:#999999;
}
/*CREATE ROOM POPUP*/
.create_room_popup{
    position:absolute;
    width:951px;
    height:657px;
    background:url("/images/create_room_bg.jpg") no-repeat;
    left:125px;
    top:0px;
    visibility:hidden;
    z-index:6;
}
.create_room_popup .category_string_name{
    background: url("/images/category_choose_border.png") repeat-x scroll left bottom rgba(0, 0, 0, 0);
    width: 912px;
}
.create_room_popup .category_text{
    background:url("/images/create_room_icon.png") no-repeat scroll left 3px rgba(0, 0, 0, 0);
    padding-left: 26px;
}
.create_room_popup .left_block{
    width:430px;
    margin-left:20px;
    float:left;
    margin-top:14px;
    padding-left:0px;
}
.text_sub {
    color: #fff;
    font-size: 12px;
    margin-right: 20px;
    text-align: right;
    margin-bottom:11px;
}
.room_info_row {
    float: right;
    margin-bottom: 20px;
    width: 100%;
    position:relative;
}
.room_info_row_span {
    color: #fff;
    display: block;
    float: left;
    font-size: 14px;
    margin-right: 22px;
    text-align: right;
    width: 153px;
    margin-top: 6px;
}
.room_info_row_span.left {
    margin-right: 9px;
    text-align: left;
    width: auto;
}
.room_info_row_span.wide{
    width: 278px;
}
.room_info_input {
    border:3px solid transparent;
    border-radius: 0;
    color: #666666;
    font-size: 14px;
    height: 22px;
    text-indent: 8px;
    width: 241px;
}
.room_info_input.file{
    text-indent:0px;
}
.room_info_input:focus{
    border:3px solid #48abff;
    color:#333333;
}
.room_info_input.file:focus{
    border:3px solid transparent;
    color: #666666;
}
.room_info_row .checkboxes_wrapper {
    float: left;
    margin-left: 9px;
    width: 100%;
    color:#fff;
    font-size:14px;
    margin-top: 9px;

}
.room_info_textarea {
    float: left;
    border:3px solid transparent;
    height: 73px;
    margin-top: 10px;
    padding-left: 9px;
    width: 397px;
    padding-right:9px;
}
.room_info_textarea:focus {
    border:3px solid #48abff;
    color:#333333;
}
.create_room_popup .right_block{
    float: left;
    margin-left: 66px;
    margin-top: 14px;
    width: 415px;
}
.room_info_row .switch{
    border:0 none;
    background:none;
    border-radius:0px;
    height:auto;
    width:auto;
}
.room_info_row_span.margin {
    margin-left: 10px;
    margin-right: 10px;
}
.room_info_row_span.right {
    margin-right: 20px;
    width: 261px;
}
.room_info_input.small {
    width: 119px;
}
.cb-enable, .cb-disable, .cb-enable span, .cb-disable span { background: #fff; display: block; float: left;color:#666; }
.cb-enable span, .cb-disable span { line-height: 30px; display: block;}
.cb-enable span { background:#fff;padding: 0 20px;color:#666666;}
.cb-disable span { background:#fff;padding: 0 20px;color:#666666; }
.cb-disable.selected { background-position: 0 -30px; }
.cb-disable.selected span { background: #3399ff; color: #fff; }
.cb-enable.selected { background-position: 0 -60px; }
.cb-enable.selected span {background: #3399ff; color: #fff; }
.switch label { cursor: pointer; }
.switch input { display: none; }

.room_info_block {
    background: url("/images/category_choose_border.png") repeat-x scroll left top rgba(0, 0, 0, 0);
    float: left;
    padding-top: 40px;
    width:420px;
    padding-left: 37px;
}
.room_info_block > p {
    color: #fff;
    font-size: 12px;
    text-indent: 36px;
    width: 304px;
}
.room_info_block > span {
    color: #fff;
    display: block;
    font-size: 16px;
    margin-bottom: 16px;
    margin-left: 11px;
}
.create_new_room{
    background:url("/images/room_create_btn_bg.png") no-repeat;
    border: 0 none;
    color: #003366;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    height: 56px;
    margin-left: 63px;
    margin-top: 61px;
    text-transform: uppercase;
    width: 273px;
    margin-bottom:2px;
}
.room_create_btn a{
    margin-left: 82px;
    float:left;
}
.room_info_row.track{
    margin-top:34px;
}
.ui-slider.ui-slider-horizontal.ui-widget.ui-widget-content.ui-corner-all {
    background: none repeat scroll 0 0 #509fee;
    position: relative;
    width:321px;
    border-radius:2px;
    float:left;
    top:10px;
}
.ui-slider-range.ui-widget-header.ui-corner-all.ui-slider-range-min {
    background: none repeat scroll 0 0 #fff;
    height: 11px;
    border-radius:2px;
}
.ui-slider-handle.ui-state-default.ui-corner-all {
    background: none repeat scroll 0 0 #3399ff;
    display: block;
    top:-3px;
    float: left;
    height: 16px;
    position: absolute;
    border-radius:10px;
    width: 16px;
    margin-left:-8px;
    cursor:pointer;
}
.lvl_point {
    background: none repeat scroll 0 0 #336699;
    height: 3px;
    position: absolute;
    width: 3px;
    border-radius:4px;
}

.room_info_row #amount {
    color: #fff;
    float: right;
    font-size: 12px;
    margin-right: 5px;
    margin-top: 14px;
}
.room_info_row #level_points {
    position: relative;
    top: 14px;
    left:100px;
}
.room_enter_lvl_popup_trackbar{
    position:absolute;
    background:url("/images/white_arrow.png") no-repeat center bottom;
    padding-bottom:5px;
    right:287px;
    top:-21px;
}
.room_enter_lvl_popup_trackbar span{
    display:block;
    width:86px;
    height:21px;
    color:#666666;
    font-size:14px;
    background:white;
    text-align:center;
}
/*VALUTE POPUP*/

.valute_popup{

    position:absolute;
    top:0px;
    left:0px;
    bottom:0;
    right:0;
    width:951px;
    display:none;
    z-index:20;
}
.valute_popup .create_stream_wrapper {
    background: none repeat scroll 0 0 #999999;
    float: left;
    width: 951px;
}

.valute_popup  .registr_label {
    width:146px;
}
.valute_popup  .input_block {
    width:100%;
    margin-right:0px;
}
.valute_popup  .right_block{
    margin-left:0px;
}
.valute_popup .top_tab_registr{
    padding-right:44px;
    background:#0d87d0;
    float:left;
    border-radius:4px;
    border-bottom-left-radius:0;
    border-bottom-right-radius:0;
}
.people_check{
    text-align:right;
    float:left;
    width:100%;
    margin-top:-5px;
}
.people_check .people_money{
    padding-left:29px;
    color:#666666;
    font-size:22px;
    display:block;
    background:url("/images/pekakoing_grey.png") no-repeat left center;
    float:left;
    margin-left:176px;
}
.add_cash_button{
    float:right;
    background:#0099ff;
    width:116px;
    height:31px;
    color:#fff;
    font-size:14px;
    margin-right:55px;
    text-align:center;
    line-height: 30px;
    cursor:pointer;
}

.add_cash_popup{
    position:absolute;
    top:100px;
    left:25%;
    display:none;
    z-index:20;
}
#add_cash_popup{
    position:absolute;
    top:100px;
    left:125px;
    display:none;
    z-index:20;
}
.add_cash_popup .top_tab_registr{
    padding-right:44px;
    background:#0d87d0;
    float:left;
    border-radius:4px;
    border-bottom-left-radius:0;
    border-bottom-right-radius:0;
}
.add_cash_popup .create_stream_wrapper .left_block {
    height: 658px;

}
.add_cash_popup .registr_header {
    width: 860px;
    padding-top: 0;
    margin-left: 35px;
}
.add_cash_popup .create_stream_wrapper {
    width:950px;
    background:no-repeat top center #e0dfe1;
    overflow:hidden;
    box-shadow:0 0 10px rgba(0,0,0,0.5);
    border-radius: 2px;
    border:1px solid #ababab;
    height:656px;
}

.toRobocass {
    margin-left: 500px;
    margin-top:107px;
}
.robocass_menu {
    float:right;
    height:200px;

}
.to_robocass_button {

    background:#0099ff;
    width:168px;
    height:31px;
    color:#fff;
    font-size:14px;
    margin-top: 20px;
    margin-left: 210px;
    margin-right:0px;
    text-align:center;
    line-height: 30px;
    cursor:pointer;
}
#cash_value {
    padding-bottom: 4px;
}
#valute_hint {

    margin-top:0px;
    color:#545454;
    font-size:12px;
    margin-left:295px;
    margin-right: 50px;
}
.valute_popup .people_check .captcha_hint{
    margin-right: 55px;
    width: 300px;
    float:right;
}
.lenta_operacii_wrapper{
    float:left;
    width:396px;
    background:#fff;


}
.lenta_oparacii_wrapper{
    float:left;
}
.header{
    font-size:20px;
    color:#666;
    float:left;
    margin-left:31px;
    width:100%;
    display:block;
    margin-bottom:9px;
}
.operacii_tabs{
    float:left;
    width:383px;
    padding-left:13px;
    border-bottom:1px solid #545454;
}

.oper_tab{
    font-size:14px;
    color:#666;
    padding:10px 10px 6px 8px;
    display:block;
    float:left;
    cursor:pointer;
}
.oper_tab.active{
    background:#666;
    color:#fff;
}
.lenta_operacii{
    float:left;
    width:100%;
    display:none;
    height:371px;
}
.lenta_operacii.tab1{
    display:block;
}
.lenta_operacii .operacia_row{
    float:left;
    width:100%;
    color:#666666;
    font-size:12px;
    border-bottom:1px solid #ccc;
}
.lenta_operacii .date{
    text-align:center;
    float:left;
    display:block;
    width:105px;
    padding:12px 0;
}
.lenta_operacii .action{
    border-left:1px solid #ccc;
    float:left;
    width:258px;
    padding:12px 0 12px 12px;;
}
.border_bottom{
    height:1px;
    width:396px;
    background:#545454;
    float:left;
}
.valute_popup .create_stream_wrapper .right_block {
    margin-top: 0px;
}
.vivod_money_block{
    float:left;
    margin-top:20px;
}
.valute_popup .vivod_money_block  .input_block{
    float: right;
    position:relative;
}
.valute_popup .create_stream_wrapper .right_block .registr_input{
    width:213px;
}
.send_sms{
    position:absolute;
    top:2px;
    right:9px;
    width:31px;
    height:35px;
    background:url("/images/send_sms.png") no-repeat;
    cursor:pointer;
    border:0 none;
}
.create_stream_wrapper .vivod_button .captcha_hint{
    margin-top: 0;
    width: 260px;
    margin-right: 10px;
}
.vivod_button{
    float:left;
    width:100%;
}
.vivod_button button{
    border:0 none;
    width:116px;
    height:31px;
    background:#0099ff;
    color:#fff;
    font-size:14px;
    border-radius:2px;
    cursor:pointer;
}

.chat_specialist_wrapper {
    float: left;
    width: 416px;
    height:184px;
}
.chat_specialist{
    float:left;
    width:395px;
    background:#cfcfd1;

}
.chat_specialist .chat_row{
    float: left;
    margin-top: 10px;
    width: 100%;
}
.chat_specialist .blue_text {
    color: #0099ff;
    font-size:12px;
    padding-left: 10px;
}
.chat_specialist  .text{
    color:#666;
    font-size:12px;
    margin-left:4px;
}
.block_chat_specialist{
    float:left;
    margin-top:11px;
    position:relative;
}
.chat_input {
    float: left;
    padding-left:11px;
    width: 382px;
    height:26px;
}
.block_chat_specialist .send_sms{
    background:url("/images/blue_submit.png") no-repeat;
    width:44px;
    height:28px;
    top:0px;
    right:36px;
    cursor:pointer;
}
.create_stream_wrapper .block_chat_specialist .captcha_hint{
    margin-top:6px;
    line-height:12px;
}
/*CREATE STREAM POPUP*/

.create_stream_popup{
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin:auto;
    background: url("/images/create_room_bg.jpg") no-repeat scroll 0 0 rgba(0, 0, 0, 0);
    height: 657px;
    width: 951px;
    z-index: 6;
}
.create_stream_popup .category_text {
    background: url("/images/create_room_icon.png") no-repeat scroll left 3px rgba(0, 0, 0, 0);
    padding-left: 26px;
}
.create_stream_popup .category_string_name {
    background: url("/images/category_choose_border.png") repeat-x scroll left bottom rgba(0, 0, 0, 0);
    width: 912px;
    margin-bottom: 14px;
}
.left_block_wrapper{
    float:left;
    margin-top:-3px;
    width:95px;
}

.create_stream_popup #amount {
    color: #fff;
    float: left;
    font-size: 12px;
    text-align: right;
    width:424px;
    margin-bottom: 30px;
    margin-top: -5px;
}
.create_stream_popup .room_info_textarea{
    width:400px;
    height: 113px;
}
.create_stream_popup .text_sub{
    margin-right:27px;
}
.create_stream_popup .dateTime_input{
    float:right;
    margin-right:26px;
    margin-top:8px;
}
.create_stream_popup .dateTime_input input{
    width:142px;
}
.create_stream_popup  .room_info_row .checkboxes_wrapper{
    margin-left: 0;
}
.create_stream_popup  .cb-enable span{
    padding: 0 27px;
}
.create_stream_popup  .room_info_row_span.margin {
    margin-left: 10px;
    margin-right: 13px;
}
.room_info_row_span.right {
    margin-right: 20px;
    text-align: right;
    width: 130px;
}
.create_stream_popup .room_info_block{
    width:366px;
    margin-top:51px;
    padding-top: 19px;
}

.create_stream_popup  .room_info_block > p {
    text-align: right;
    width:auto;
    text-indent:0;
    margin-right:14px;
}
.create_stream_popup .right_block .text_sub {
    margin-right: 10px;
}
.summary_start_rating{
    margin-top: 65px;
    margin-left:92px;
    float:left;
}
.summary_start_rating .big_number{
    color:#3399ff;
    font-size:48px;
    float:left;
    clear:both;
    font-weight:bold;
    width:100%;
    text-align:center;
}
.summary_start_rating  p{
    color:#fff;
    font-size:14px;
    float:left;
    width:100%;
    text-align:center;
}
/*REGISTR POPUP*/
.registration_popup{
    position:absolute;
    top:100px;
    left:125px;
    display:none;
    z-index:20;
}

.top_tab_registr{
    background:url("/images/registr_tab.png") no-repeat;
    color:#dedede;
    font-size:18px;
    color:#e2dde0;
    text-transform:uppercase;
    padding-left: 53px;
    line-height:54px;
    margin-left:30px;
}

.registration_wrapper{
    width:950px;
    background:url("/images/registr_shadow.png") no-repeat top center #e0dfe1;
    overflow:hidden;
    box-shadow:0 0 10px rgba(0,0,0,0.5);
    border-radius: 2px;
    border:1px solid #ababab;
    height:656px;
}
.left_block{
    float:left;
    padding-left:27px;
    width:450px;
}
.right_block{
    float:left;
    width:400px;
    margin-left:50px;
}
.registr_header{
    color:#545454;
    font-size:20px;
    padding-bottom:13px;
    display:block;
    float:left;
    border-bottom:1px solid #545454;
    width:380px;
    padding-top:24px;
    padding-left:15px;
}
.input_block{
    float:left;
    width:90%;
    padding-bottom: 18px;
}
.registr_header.custom_class{
    margin-bottom:20px;
}
.registr_label{
    color:#545454;
    font-size:16px;
    float:left;
    text-align:right;
    width:85px;
    margin-right:10px;
    padding-top:10px;
}
.registr_input{
    float:left;
    border:1px solid #ababab;
    border-radius:1px;
    color:#ababab;
    font-size:14px;
    width:275px;
    border:1px solid #ababab;
    border-radius:1px;
    height:35px;
    text-indent:9px;
}
.registr_img.true{
    background:url("/images/ok.png") no-repeat;
    width:20px;
    height:17px;
    display:block;
    float:left;
    position:relative;
    top:11px;
    left:13px;
}
.registr_img.false{
    background:url("/images/ne_ok.png") no-repeat;
    width:16px;
    height:16px;
    display:block;
    float:left;
    position:relative;
    top:11px;
    left:13px;
}
.more_registr{
    font-size:16px;
    float:left;
    width: 83.1%;
    text-align:right;
    margin-bottom:22px;
    color:#545454;
}
.more_registr .px12{
    font-size:12px;
    color:#545454;
}
.more_registr a{
    text-decoration:underline;
    font-size:16px;
}
.captcha_img_block{
    float:left;
    margin-top:36px;
}
.captcha_pic{
    float:left;
    margin-right:35px;
    cursor:pointer;
    position:relative;
}
.captcha_pic.true{
    padding:14px 6px 19px;
    background:#94ddbc;
    margin-top:-14px;
}
.registr_img.true_captcha{
    background:url("/images/ok.png") no-repeat;
    width:20px;
    height:17px;
    display:block;
    position:absolute;
    top:49px;
    left:124px;
}
.captcha_hint {
    float: left;
    margin-top:11px;
    color:#545454;
    font-size:12px;
    margin-left:6px;
}
.registr_contract {
    float: left;
    width:400px;
    height:390px;
    margin-bottom:14px;
    color:#545454;
    font-size:12px;
}
.agree_block {
    border-top: 1px solid #545454;
    float: left;
    margin-top: -14px;
    padding-top: 16px;
    width: 381px;
}
.agree_block > label {
    color: #606060;
    float: left;
    font-size: 14px;
    margin-left: 6px;
    margin-top: -1px;
}
#registr_agree{
    float:left;
    clear:both;
    margin:0;
}
.registr_header.width_class{
    width:366px;
}
.registr_text{
    padding:10px 12px 0px 19px;
    background:white;
    width:350px;
}
.right_block > label {
    float: left;
    margin-left:5px;
    color:#606060;
    font-size:14px;
}
.registr_submit{
    color:#084a6d;
    font-weight:bold;
    background: url("/images/registr_button.png") no-repeat;
    height:62px;
    width:279px;
    font-size:22px;
    text-transform:uppercase;
    cursor:pointer;
    margin-top: 50px;
    margin-left:50px;
}
.registr_submit:hover{
    background: url("/images/send_hover.png") no-repeat scroll 0 0 rgba(0, 0, 0, 0);
    color:#999999;
}
.close_btn{
    position:relative;
    cursor:pointer;
    width:34px;
    height:34px;
    display:block;
    background:url("/images/close.png") no-repeat;
    top:9px;
    left:923px;
}
/*USER_STREAMS*/
.user_popup_body.user_streams{
    margin: 0 0.9%;
    overflow: hidden;
    width: 98.2%;
}
.user_streams_wrapper,.user_streams_ignore_wrapper{
    width:100%;
    margin-top: -13px;
    position:relative;
}
.user_streams_ignore_wrapper{
    display:none;
    margin-top:17px;
}
.user_streams_list, .user_streams_ignore_list {
    height: 338px;
    position:relative;
    width:100%;
}
.user_streams_wrapper .left_shadow, .user_streams_ignore_wrapper .left_shadow{
    background: url("/images/left_shadow.png") repeat-x scroll left bottom rgba(0, 0, 0, 0);
    height: 313px;
    position: absolute;
    z-index: 10;
    top:7px;
    width:66px;
    display:none;
    left:0;
}
.user_streams_wrapper .right_shadow,.user_streams_ignore_wrapper .right_shadow{
    background: url("/images/right_shadow.png") repeat-x scroll left bottom rgba(0, 0, 0, 0);
    height: 312px;
    position: absolute;
    z-index: 10;
    top:7px;
    width:66px;
    right:0;
}
.user_streams_list_wrapper,.user_streams_ignore_list_wrapper {
    float: left;
}
.favorite_stream{
    margin-right:10px;
    height:321px;
    float:left;
    position:relative;
    z-index:5;
    padding:7px;
}
.favorite_stream:hover {
    background:url("/images/favorites_hover.png") no-repeat;
}
.favorite_stream_header{
    float:left;
    position:relative;
    width: 241px;
}
.favorite_stream_header .menu_popup_arrow {
    left:9px;
    top:-10px;
}
.its_streamer .favorite_stream_header{
    background:url("/images/its_streamer.png") no-repeat 59px 0px #001325;
}
.its_author .favorite_stream_header{
    background:url("/images/its_author.png") no-repeat 59px 0px #002025;
}
.its_category .favorite_stream_header{
    background:url("/images/its_category.png") no-repeat 59px 0px #000a25;
}
.its_room .favorite_stream_header{
    background:url("/images/its_room.png") no-repeat 59px 0px #333333;
}
.ignored .favorite_stream_header{
    background:#cc3333;
}
.ava{
    width:59px;
    height:59px;
    float:left;
}
.zapresheno{
    background:url("/images/stoianka_zapreshena.png") no-repeat;
    width:54px;
    height:54px;
    top:-56px;
    left:2px;
    position:relative;
}
.favorite_streamer_name{
    float:left;
    margin-left:9px;
    font-size:18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width:150px;
    color:#fff;
    clear:right;
    margin-top:10px;
}
.ignored  .favorite_streamer_name{
    color:#000;
}
.ignored .favorite_streamer_category{
    color:#fff;
}
.favorite_streamer_category{
    float:left;
    width:150px;
    font-size:12px;
    margin-left:9px;
    margin-top:-1px;
}
.its_streamer .favorite_streamer_category{
    color:#3189ef;
}
.its_author .favorite_streamer_category{
    color:#0fd483;
}
.its_category .favorite_streamer_category{
    color:#a671ff;
}
.its_room .favorite_streamer_category{
    color:#cccccc;
}
.favorite_del{
    width:9px;
    height:9px;
    background:url("/images/del_stream.png") no-repeat;
    position:relative;
    right:5px;
    top:-25px;
    float:right;
    cursor:pointer;
}
.ignored .favorite_del{
    background:url("/images/del_stream_ignored.png") no-repeat;
}
.its_author .favorite_del{
    background:url("/images/del_stream_author.png") no-repeat;
}
.its_category .favorite_del{
    background:url("/images/del_stream_category.png") no-repeat;
}
.its_room  .favorite_del{
    background:url("/images/del_stream_room.png") no-repeat;
}
.favorite_stream_preview{
    float:left;
    height:253px;
    position:relative;
    clear: both;
}
.favorite_live{
    position:absolute;
    z-index:8;
    border-radius:2px;
    background:url("/images/podloshka_live.png") repeat-x;
    color:#fff;
    font-size:14px;
    padding: 2px 4px 1px;
    top:5px;
    left:8px;
    display:none;
    border-radius:2px;
}

.favorite_live > img {
    height: 12px;
    position: relative;
    top: 1px;
    width: 12px;
    margin-right:3px;

}
.favorite_live.active{
    display:block;
}
.favorite_podpiski{
    background:url("/images/podloshka_live.png") repeat-x;
    z-index:8;
    font-size:14px;
    color:#fff;
    position:absolute;
    right:5px;
    top:5px;
    border-radius:2px;
    padding:1px 7px 1px 5px;
}
.favorite_lvl {
    left: 69px;
    position: absolute;
    top: 75px;
    z-index: 8;
    background:url("/images/circle.png") no-repeat;
    width:67px;
    height:67px;
}

.for_canvas {
    left: 4px;
    position: relative;
    top: 4px;
}
.how_much_fill {
    display: none;
}
.lvl {
    color: #fff;
    font-size: 28px;
    left: 11px;
    position: relative;
    top: -46px;
    display:block;
    width:43px;
    text-align: center;
}
.stream_popup_del{
    position:absolute;
    top:127px;
    left:50%;
    border-radius:2px;
    background:#040a15;
    font-size:14px;
    color:#fff;
    width:180px;
    height:71px;
    z-index:10;
    display:none;
}
.stream_popup_del span{
    text-align:center;
    display:block;
    margin-top:7px;
}
.stream_popup_del a{
    padding:4px 30px 5px;
    color:#fff;
    border-radius:2px;
    cursor:pointer;
    margin:9px 0px 0 7px;
    display:block;
    float:left;
}
.stream_popup_del a:hover{
    background:#3189ef;
}
/*PROFILE*/
.submenu_wraper, .profile_wrapper {
    margin-right: 0.9%;
    overflow:hidden;
}
.checkboxes_wrapper_main{
    float:right;
    color:white;
    font-size:14px;
}
.information_text {
    color: #fff;
    font-size:16px;
    float:left;
    margin-top:7px;
    width: 38%;
}

.exp_history_text {
    float: left;
    width:62%;
    margin-top:7px;
}
.exp_history_text > span {
    color: #fff;
    float: left;
    font-size:16px;
}
.profile_wrapper{

    margin-top:20px;

}
.profile_stat {
    float: left;
    width:37%;
    border-right:1px solid #308af2;
    height:345px;
}
.profile_contacts {
    float: left;
    margin-left: 64px;
    margin-top: 65px;
}
.profile_avatar{
    float:left;
    width: 64px;
}
.profile_info {
    float: left;
    margin-left: 18px;
    margin-top:-5px;
}
.registr_date {
    color: #fff;
    display: block;
    float: left;
    font-size: 12px;
    text-align: center;
    width: 64px;
    margin-top:3px;
}
.user_name {
    float:left;
    color:#f46b92;
    font-size:24px;
}
.user_money_text {
    clear: both;
    float: left;
    font-size:12px;
    color:#fff;
}

.user_money {
    float: left;
    color:#eef1a2;
    font-size:12px;
}
.user_site {
    clear: both;
    float: left;
    text-decoration:underline;
    font-size:12px;
    margin-top: 9px;
}
.user_skype {
    clear: both;
    float: left;
    font-size:12px;
    color:#fff;
    margin-top: 9px;
}
.user_skype a{
    color:#fff;
    text-decoration:underline;
    cursor:pointer;
}
.profile_avatar .user_online.true{
    display:block;
    background:url("/images/big_online.png") no-repeat;
    width:16px;
    height:16px;
    position:relative;
    left: 56px;
    top: -72px;
}
.profile_lvl_wrapper {
    clear: both;
    float: left;
    margin-top: 83px;
    margin-left: 46px;
}
.min_month {
    color: #3189ef;
    display: block;
    font-size: 12px;
    position: absolute;
    right: -28px;
    text-align: center;
    top: 26px;
    transform: rotate(-90deg);
    -moz-transform:rotate(-90deg);
    width: 52px;

}
.profile_hist .bottom_shadow{
    background: url("/images/bottom_shadow.png") repeat-x scroll left bottom rgba(0, 0, 0, 0);
    height: 66px;
    position: absolute;
    width: 98%;
    z-index: 10;
    top:278px;

}
.profile_hist .top_shadow{
    background: url("/images/top_shadow.png") repeat-x scroll left top rgba(0, 0, 0, 0);
    height: 66px;
    position: absolute;
    width: 98%;
    z-index: 10;
    top:0px;

    display:none;
}
.last_month {
    color: #3189ef;
    display: block;
    font-size: 12px;
    position: absolute;
    right: -30px;
    text-align: center;
    bottom: 26px;
    transform: rotate(-90deg);
    -moz-transform:rotate(-90deg);
    width: 52px;
}
.profile_lvl {
    float: left;
    margin-right: 34px;
}
.profile_lvl .lvl{
    top:-80px;
}
.lvl_name {
    color: #fff;
    float: left;
    font-size: 12px;
    margin-top:20px;
    display:block;
    width:57px;
    text-align:center;
}
.profile_hist {
    float: left;
    width: 62.2%;
    position:relative;
}

.profile_hist_wrapper {
    margin-left: 7px;
    overflow:hidden;
    height:344px;
}
.one_day_history {
    float: left;
    width:100%;
    margin-bottom: 18px;
}
.one_day_history:last-child {
    margin-bottom: 0px;
}
.top_line{
    background:#308af2;
    height:1px;
    width:53px;
    position:relative;
    margin-bottom: 11px;
}
table.one_day {
    overflow: hidden;
    width: 100%;
}
.one_day_history:first-child .top_line{
    display:none;
}
.whats_date {
    padding-bottom: 1px;
}
.date_td {
    text-align: center;
    vertical-align: top;
    width: 53px;
    background:url("/images/date_podloshka.png") repeat;
}
span.DD {
    color: #3189ef;
    font-size:24px;
    font-weight:bold;
}
span.mm {
    color: #fff;
    font-size:12px;
}
.exp_td {
    background:url("/images/exp_podloshka.png") repeat;
}
.exp {
    border-bottom:1px solid #114272;
    margin-left:17px;
    padding:4px 0 6px;
}
.exp_td .exp:last-child{
    border-bottom:0 none;
}
.for_what {
    color: #fff;
    font-size: 14px;
    margin-left:3px;
}
.add_exp{
    font-size:10px;
}
.add_exp span{
    font-size:16px;
    font-weight:bold;
}
.summ_exp_for_day {
    float: right;
    margin-top: 2px;
}
.summ_exp_for_day > span {
    margin-left: 32px;
}
.support{
    color:#ffe681;
}
.robot{
    color:#fa4056;
}
.author{
    color:#50f79b;
}
.streamer{
    color:#3189ef;
}
/*POPUP SEARCH*/
.search_popup, .options_popup{
    display:none;
    position:absolute;
    top:34px;
    right:11px;
    z-index:6;
}
.search_popup{
    right:11px;
}
.arrow_top {
    background:url("/images/top_gray_arrow.png") no-repeat;
    width:18px;
    height:9px;
    position:relative;
    z-index:2;
}
.search_popup .arrow_top{
    left: 131px;
    top: 1px;
}

.search_wrapper{
    background:#cccccc;
    border-top:1px solid #63676d;
    width:301px;
    float:left;
    position:relative;
    left:-10px;
    z-index:4;
}
.input_search{
    float:left;
    margin-left: 17px;
    margin-top: 17px;
}
.input_search input{
    border:1px solid #ababab;
    border-radius:2px;
    background:url("/images/lupa.png") no-repeat 4px 6px #fff;
    color:#666666;
    font-size:14px;
    width:232px;
    height:25px;
    padding-left:28px;
}
.search_result{
    border-top: 1px solid #666666;
    float: left;
    margin-left: 17px;
    width: 263px;
    margin-top:8px;
    padding-top: 8px;
    padding-bottom:9px;
}
.search_result_field,.search_button_filed {
    float: left;
    width: 269px;
}
.search_image{
    width:32px;
    height:32px;
    float:left;
}
.search_image.stream{
    background:#cc3399;
}
.search_image.user{
    background:url("/images/some_pic.jpg") no-repeat;
}
.search_result_text{
    float:left;
    background:#fff;
    width:231px;
    height:32px;
    margin-bottom: 5px;
}
.search_result_text a, .search_button_filed a{
    color:#666666;
    font-size:14px;
    text-decoration:underline;
    display: block;
    margin-top: 6px;
    padding-left: 7px;
}
.little_red_button{
    position:relative;
    width:6px;
    height:6px;
    background:url("/images/little_red_button.png") no-repeat;
    right:10px;
    top:4px;
    float:right;
}
.search_button_filed{
    width:263px;
    background:#fff;
    height: 32px;
}
/*POPUP OPTIONS*/
.options_popup .arrow_top{
    left: 240px;
    top: 1px;
}
.languages{
    margin-top:37px;
    margin-left:18px;
    border-bottom:1px solid #666;
    width:264px;
    float:left;
    color:#666666;
    font-size:16px;
    padding-bottom: 19px;
}
.options_wrapper{
    background:#cccccc;
    border-top:1px solid #63676d;
    width:301px;
    float:left;
    position:relative;
    left:-10px;
    z-index:4;
}
.sounds{
    margin-top:10px;
    float:left;
    width:264px;
    text-align:right;
    margin-left:18px;
}

.uvedomlenia > span, .uvedomlenia_sound > span {
    float: left;
    color:#666666;
    font-size:16px;
    width:170px;
    text-align:right;
    margin-top:2px;
    margin-right:7px;
}
.uvedomlenia {
    float: left;
    margin-bottom: 7px;
}
.uvedomlenia_sound{
    float:left;
    padding-bottom:16px;
}
/*SWITCHERS*/
.switch {
    position: relative;
    height: 24px;
    width: 85px;
    background: #fff;
    border-radius: 2px;
    border:1px solid #ababab;
    float:left;
}
.switch-label {
    position: relative;
    z-index: 2;
    float: left;
    line-height: 26px;
    font-size: 12px;
    color: #fff;
    text-align: center;
    cursor: pointer;
}
.switch-label-on{
    width:33px;
}
.switch-label-off{
    width:52px;
    color:#545454;
}
.switch-input {
    display: none;
}
.switch-selection {
    display: block;
    position: absolute;
    z-index: 1;
    top: 1px;
    height:22px;
    left: 1px;
    width:33px;
    background: #65bd63;
    border-radius: 3px;
    -webkit-transition: left 0.15s ease-out;
    -moz-transition: left 0.15s ease-out;
    -o-transition: left 0.15s ease-out;
    transition: left 0.15s ease-out;
}
.switch-blue .switch-selection {
    background: #0099ff;
}
/*UVEDOMLENIA/PREDUPREJDENIA POPUP*/
.sysmess_wrapper{
    position:fixed;
    z-index:7;
    right:6px;
    top:43px;
}
.system_message_popup{
    display:none;
    float:left;
    border-radius:4px;
    border:1px solid #3477e5;
    background:#0a4b9b;
    width:177px;
    margin-bottom:7px;
    position:relative;
    clear:both;
}
.user_sysmessage_nick{
    color:#d3ebff;
    font-size:16px;
    padding:5px 9px 0px;
    float:left;
    display:block;
    text-overflow:ellipsis;
    overflow:hidden;
    width:138px;
}
.sysmessage_text{
    color:#96cbf8;
    padding-left:9px;
    width:145px;
    display:block;
    float:left;
    font-size:12px;
    padding-bottom:6px;
}
.close_sysmess_popup{
    background:url("/images/close_sysmess.png") no-repeat;
    display:block;
    width:8px;
    height:8px;
    position:absolute;
    top:6px;
    right:6px;
    cursor:pointer;
}
/*HOW MUCH DOBATE POPUP*/
.how_much_donate_popup{
    display: none;
    left: 416px;
    position: fixed;
    top: 100px;
    z-index: 20;
}
.how_much_donate_popup .forgot_wrapper{
    width:286px;
    border:1px solid #ababab;
    height:193px;
}
.how_much_donate_popup .close_btn{
    left: 260px;
    position: absolute;
    top: 69px;
}
.how_much_donate_popup .top_tab_registr{
    padding-left: 29px;
    width: 197px;
    border-top-right-radius: 6px;
}

#how_much_donate > label {
    color: #545454;
    float: left;
    font-size: 16px;
    margin-left: 47px;
    margin-top: 10px;
}
.how_much_donate_input {
    width:115px;
}
.how_much_donate_popup .submit_button_forgot_password{
    width: 228px;
    margin-left: 32px;
    border-right:3px solid #bcbcbc;
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
}
/*ERROR POPUP*/
.error_popup{
    display:none;
    left: 38%;
    position: fixed;
    top: 250px;
    z-index: 20;
    border:1px solid #001c37;
    width:347px;
    background:rgba(0,51,102,0.6);
}
.warning_block{
    float:left;
    border-right:1px solid #001c37;
    background:url("/images/warning.png") no-repeat;
    width:100px;
    height:88px;
}
.error_text{
    float:left;
    padding:17px 28px 17px 11px;
    width:206px;
}
.error_text span{
    font-size:11px;
    color:#fff;
    word-wrap:break-word;
}
/*RESET AND RESTORE PASSWORD POPUP, AUTORIZATION POPUP, CHECK_PWD POPUP*/
.change_pwd_popup ,.restore_pwd_popup ,.autorization_popup,.check_pwd_popup, .login_form  {
    left: 0;
    position: fixed;
    top: 0;
    z-index: 19;
    background:url("/images/little_bg.jpg") no-repeat;
    width:334px;
    height:275px;
    visibility:hidden;
    bottom:0;
    right:0;
    margin:auto;
}
.login_form  {
    visibility: visible;
}
.login_form .authorizationAlert {
    color: #ff5b5b;
    font-size: 13px;
    float: left;
    margin-bottom: 10px;
}
.check_pwd_popup {
    height:211px;
}
.change_pwd_popup .category_string_name, .restore_pwd_popup .category_string_name, .autorization_popup .category_string_name,
.check_pwd_popup .category_string_name, .login_form .category_string_name{
    padding-bottom:9px;
    margin-right:18px;
}
.change_pwd_popup  .category_text, .restore_pwd_popup .category_text, .login_form .category_text{
    background:url("/images/arrow_up_icon.png") no-repeat scroll left 3px rgba(0, 0, 0, 0);
    padding-left:24px;
}
.login_form .category_text {
    width:300px;
}
.change_pwd_popup > form, .restore_pwd_popup >form ,.autorization_popup >form,.check_pwd_popup >form, .login_form > form {
    margin-left: 32px;
    margin-top: 25px;
}
.change_pwd_popup .room_info_input, .restore_pwd_popup .room_info_input, .autorization_popup .room_info_input, .login_form .room_info_input{
    margin-bottom: 25px;
    width:265px;
}
.check_pwd_popup .room_info_input{
    margin-bottom: 2px;
    width:265px;
}
.blue_button {
    background: url("/images/blu_button.png") no-repeat scroll 0 0 rgba(0, 0, 0, 0);
    border: 0 none;
    color: #003366;
    font-size: 18px;
    font-weight: bold;
    height: 56px;
    text-transform: uppercase;
    width: 273px;
    cursor:pointer;
    padding:0px;
    margin:0px;
}
.check_pwd_popup .blue_button{
    margin-top:10px;
}
.text_popup{
    color:#999999;
    font-size:12px;
    width:273px;
    display:block;
    text-align:center;
    float:left;
    margin-top:5px;
}
.check_pwd_popup .text_popup{
    text-align:left;
    text-indent:9px;
    color:#ff5b5b;
    display:none;
}
a.text_popup{
    text-decoration:underline;
}
.restore_pwd_popup{
    height:226px;
}
.autorization_popup .category_text,.check_pwd_popup .category_text{
    background: url("/images/create_room_icon.png") no-repeat scroll left 3px rgba(0, 0, 0, 0);
    padding-left:24px;
}
/*OTHER CATEGORY CHOOSE*/
.other_category_choose{
    position:fixed;
    z-index:7;
    background:#353B40;
    width:700px;
    height:435px;
    top:53px;
    left:225px;
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
    visibility:hidden;
}
.other_category_choose a {
    color: #FFFFFF;
    font-size: 18px;
    width: auto;
}
.other_category_choose .cifri_wrapper {
    width: auto;
    padding: 10px;
}
.category_string_name{
    background:url("/images/category_choose_border.png") no-repeat left bottom;
    margin-left:18px;
    padding-bottom:6px;
}
.category_text{
    background:url("/images/category_icon.png") no-repeat left 3px;
    display:block;
    padding-left:30px;
    color:#fff;
    font-size:18px;
    margin-left:10px;
    width:200px;
    margin-top:22px;
}
.close_category{
    position:absolute;
    background:url("/images/close_category_choose.png") no-repeat;
    width:14px;
    height:13px;
    right:10px;
    top:9px;
    cursor:pointer;
}
.category_filtr_line{
    float:left;
    width:100%;
    padding-top:19px;
    margin-bottom:25px;
}
.search_category_input {
    float: left;
    width:268px;
    padding:0px 0 0 42px;
    border:0px solid #48abff;
    height:37px;
    color:#000;
    border-radius:0px;
    background:url("/images/search_icon_small.png") no-repeat 11px center #fff;
    box-shadow: 0 0 6px #858585 inset;
    margin-left:19px;
}
.search_category_input:focus {
    width:262px;
    border:3px solid #48abff;
    margin-top:-3px;
    margin-bottom:-3px;
    background:url("/images/search_icon_small_black.png") no-repeat 11px center #fff;
}
.choose_category_filter{
    float:left;
    margin-left:43px;
    margin-top:8px;
}
.choose_category_filter > span{
    float:left;
    color:#ffffff;
    font-size:14px;
}
.choose_category_filter .checkboxes_wrapper{
    margin-left:17px;
    margin-top:0px;
}
.choose_category_filter .checkboxes_wrapper label{
    margin-left:5px;
    color:#fff;
    font-size:14px;
}
.category_choose_wrapper{
    width:100%;
    float:left;
    height:270px;
}
.category_choose{
    height:270px;
}
.category_choose-category{
    width:140px;
    height:260px;
    border-right:1px solid black;
    position:relative;
    float:left;
}
.category_choose-category img{
    width:140px;
    height:260px;
}
.black_filtr{
    position:absolute;
    background:rgba(0,0,0,0.5);
    z-index:2;
    width:140px;
    height:260px;
    top:0px;
}
.black_filtr:hover{
    background:rgba(0,0,0,0);
}
.category_choose_info{
    position:absolute;
    bottom:0px;
    background:rgba(0,0,0,0.7);
    width:128px;
    color:#fff;
    z-index:3;
    padding:7px 6px 7px;
}
.category_choose_name{
    font-size:12px;
    float:left;
    width:128px;
    line-height: 12px;
    height:26px;
}
.category_choose_genre{
    font-size:10px;
    float:left;
    width:128px;
    margin-top:4px;
}
.category_choose_people{
    font-size:10px;
    float:left;
    width:128px;
    margin-top: 2px;
    display:none;
}
.how_much_found{
    font-size:12px;
    color:#fff;
    text-align:center;
    width:100%;
    padding-top:7px;
    border-top:1px solid #181b20;
    float:left;
}
.how_much_found span{
    font-weight:bold;
}
/*FADE*/
.fade{
    background: none repeat scroll 0 0 rgba(0, 0, 0, 0.6);
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 5;
    display:none;
    top:0px;
    left:0px;
}
/*CUSTOM SELECT*/
.selectboxit-container .selectboxit.chat_select {
    background: none repeat scroll 0 0 #000b1b;
    font-size:14px;
    color:#fff;
    border: 0 none;
    border-radius: 3px;
    height: 29px;
    max-width: 200px;
}
.selectboxit-btn.chat_select.selectboxit-enabled:hover, .selectboxit-btn.chat_select.selectboxit-enabled:focus{
    background: none repeat scroll 0 0 #000b1b;
    color:#fff;
}
.chat_select .selectboxit-arrow.selectboxit-default-arrow{
    border-top: 4px solid #fff;
}
.chat_select +ul{
    max-width:200px;
}
.selectboxit-option-anchor {
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
}

.selectboxit-container .selectboxit.chat_streamer_action_select {
    background: none repeat scroll 0 0 #0b2e55;
    font-size:14px;
    color:#3399ff;
    border: 0 none;
    border-radius: 3px;
    height: 29px;
    max-width: 200px;
}
.selectboxit-btn.chat_streamer_action_select.selectboxit-enabled:hover, .selectboxit-btn.chat_streamer_action_select.selectboxit-enabled:focus{
    background: none repeat scroll 0 0 #0b2e55;
    color:#3399ff;
}
.chat_select .selectboxit-arrow.selectboxit-default-arrow{
    border-top: 4px solid #3399ff;
}
.page {
    display: inline;
}
.invisible {
    display: none;
}
.streamOnline {
    width: 120px;
    height: 60px;
    position: relative;
    margin-top: 10px;
}

.onoffswitch {
    position: relative;
    width: 90px;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select: none;
    display: inline-block;
}
.onoffswitch-checkbox {
    display: none;
}
.onoffswitch-label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid #999999;
    border-radius: 20px;
}
.onoffswitch-inner {
    display: block;
    width: 200%;
    margin-left: -100%;
    -moz-transition: margin 0.3s ease-in 0s;
    -webkit-transition: margin 0.3s ease-in 0s;
    -o-transition: margin 0.3s ease-in 0s;
    transition: margin 0.3s ease-in 0s;
}
.onoffswitch-inner:before, .onoffswitch-inner:after {
    display: block;
    float: left;
    width: 50%;
    height: 30px;
    padding: 0;
    line-height: 30px;
    font-size: 14px;
    color: white;
    font-family: Trebuchet, Arial, sans-serif;
    font-weight: bold;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.onoffswitch-inner:before {
    content: "ON";
    padding-left: 10px;
    background-color: #0A2749;
    color: #FFFFFF;
}
.onoffswitch-inner:after {
    content: "OFF";
    padding-right: 10px;
    background-color: #000b1b;
    color: #999999;
    text-align: right;
}
.onoffswitch-switch {
    display: none;
    width: 18px;
    margin: 6px;
    background: #FFFFFF;
    border: 2px solid #999999;
    border-radius: 20px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 56px;
    -moz-transition: all 0.3s ease-in 0s;
    -webkit-transition: all 0.3s ease-in 0s;
    -o-transition: all 0.3s ease-in 0s;
    transition: all 0.3s ease-in 0s;
}
.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {
    margin-left: 0;
}
.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {
    right: 0px;
}
/*other styles*/
#dynamic_filter_content .mCSB_inside > .mCSB_container {
    margin-right:0px;
}
/*hack for chrome*/
@media screen and (-webkit-min-device-pixel-ratio:0) {
    .forgot_password_popup .top_tab_registr{
        float:none;
        width:265px;
    }
    .rating_row{
        padding-bottom: 7px;
    }
    .news_block .preview_text{
        height: 57px;
    }
    .rating_row{
        padding-bottom: 6px;
    }
    .create_stream_popup .top_tab_registr{
        float:none;
        width:193px;
    }
    .languages .selectBox-label{
        width:80% !important
    }
    .valute_popup .top_tab_registr{
        width:236px;
        float:none;
    }
    .add_cash_popup .top_tab_registr{
        width:236px;
        float:none;
    }
}

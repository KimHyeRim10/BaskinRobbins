

use hrdb2019;
select database();
show tables;


/*****************
icecream_product
****************/



create table icecream_product(
pid 	int 	auto_increment primary key,
name 	varchar(100) not null,
image 	varchar(200) not null,
hash 	varchar(100),
bgcolor  varchar(50),
hashcolor varchar(50),
label  varchar(100),
pdate datetime 
);


	



insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('애플 민트','/images/icecream/1.png','#그린애플 #민트 #사과','#9bb053','#ffffff','',now());
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('아몬드 봉봉','/images/icecream/2.png','#아몬드 #초콜릿','#f8cb5c','#4c2113','',now());
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('블랙 소르베','/images/icecream/3.png','#반전매력 #상큼 #레몬','#eed2ff','#453d4d','',now());
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('초콜릿 칩','/images/icecream/4.png','#초콜릿칩','#f19bd4','#595959','',now());
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('청포도 샤베트','/images/icecream/5.png','#청포도','#3c713b','#e4eac6','',now());
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('윌넛','/images/icecream/6.png','#호두','#684410','#f1f0c6','',now());
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('자모카 아몬드 훠지','/images/icecream/7.png','#모카 #초콜릿','#6f6b69','#ddc295','',now());
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('초콜릿','/images/icecream/8.png','#진정한 #초콜릿','#fff99d','#612f29','',now()); 
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('피스타치오 아몬드','/images/icecream/9.png','#피스타치오 #아몬드','#836233','#c5e5dd','',now()); 
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('그린티','/images/icecream/10.png','#녹차 #그린티','#fcef84','#49511f','',now()); 
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('초콜릿 무스','/images/icecream/11.png','#초코속에 #초콜릿','#c4a788','#612f29','',now()); 
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('이상한 나라의 솜사탕','/images/icecream/12.png','#달달 #부드러운 #솜사탕','#ffaeb8','#4f8096','',now()); 
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('초코나무 숲','/images/icecream/13.png','#초콜릿 #녹차 #초코볼','#3d5120','#ffd988','',now()); 
 insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('바닐라','/images/icecream/14.png','#바닐라','#67869b','#f3efe5','',now()); 
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('바람과 함께 사라지다','/images/icecream/15.png','#블루베리 #스트로베리 #치즈케이크','#c32550','#ffcec7','',now()); 
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('31요거트','/images/icecream/16.png','#요거트 #31요거트','#396b8e','#c8d870','',now());     
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('베리베리 스트로베리','/images/icecream/17.png','#스트로베리 #새콤상큼','#126f4a','#ffc9c1','',now());  
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('오레오 쿠키 앤 크림','/images/icecream/18.png','#바닐라 #오레오','#35221f','#e6d7ba','',now());  
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('슈팅스타','/images/icecream/19.png','#톡톡 #팝핑캔디 #체리','#324b79','#9dbac6','',now());  
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('체리쥬빌레','/images/icecream/20.png','#체리','#b45a93','#ffd7de','',now()); 
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('레인보우 샤베트','/images/icecream/21.png','#파인애플 #오렌지 #라지베리','#ffeb8e','#e54567','',now());  
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('뉴옥 치즈케이크','/images/icecream/22.png','#치즈 #치즈케이크','#7f5a4d','#c17641','',now());  
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('민트 초콜릿 칩','/images/icecream/23.png','#민트 #초콜릿 #민초','#836468','#90b9b4','',now());  
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('엄마는 외계인','/images/icecream/24.png','#초콜릿 #초코볼','#f8cb5c','#87602c','',now());  
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('러브미','/images/icecream/25.png','#딸기 #블루베리 #바닐라 #롤리팝캔디','#e5989b','#9d4edd','',now()); 
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('피치 요거트','/images/icecream/26.png','#피치 #요거트','#ffb700','#fae0e4','',now()); 
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('봉쥬르 마카롱','/images/icecream/27.png','#마카롱 #초콜릿','#ff006e','#ffe5ec','',now()); 
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('소금 우유 마카롱','/images/icecream/28.png','#소금우유 #단짠','#004e98','#ffffff','',now()); 
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('디노 젤리','/images/icecream/29.png','#공룡젤리','#a7c957','#386641','',now()); 
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('블루베리 요거트','/images/icecream/30.png','#블루베리요거트 #블루베리 #요거트','#8e7dbe','#dee2ff','',now()); 
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('북금곰 폴라베어','/images/icecream/31.png','#민트 #크런치 #폴라베어','#5aa9e6','#e0fbfc','',now()); 
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('메롱 멜론','/images/icecream/32.png','#멜론','#e9edc9','#6a994e','',now()); 
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('이상한 나라의 슈팅스타','/images/icecream/33.png','#이상한 나라의 슈팅스타','#ffe5ec','#cdb4db','/images/icecream/label2.png',now()); 
insert into icecream_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('우주 라이크 봉봉','/images/icecream/34.png','#이달의 맛 #우주 라이크 봉봉','#dda15e','#540b0e','/images/icecream/label1.png',now()); 







create table icecreamdetail_product(
did 	int 	auto_increment primary key,
pid 	int not null,
icecreamimage 	varchar(200) not null,
bgcolor varchar(50),
line 	varchar(100) not null,
engname	varchar(100),
korname1  varchar(100),
korname2 varchar(100),
dep  varchar(200),
price int,
btnleft varchar(50),
btnright varchar(50),
servingsize int,
calory int,
sugar int,
protein int,
saturatedfat int,
natrium int,
allergy varchar(50),
menuviewimage varchar(200)
);



     
insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(1, '/images/icecream/1.png','#9bb053','ICECREAM','APPLE MINT','애플 민트','','상큼한 청사과와 시원한 민트향이 기분까지 상쾌하게','3900','우주 라이크 봉봉','',115,189,22,6,3,29,'우유, 대두','/images/productdetail/iceview/1.jpg');      
insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(2, '/images/icecream/2.png','#f8cb5c','ICECREAM','Almond Bon Bon','아몬드 봉봉','','입안 가득 즐거운 초콜릿, 아몬드로 더욱 달콤하게!','3900','우주 라이크 봉봉','',115,312,26,5,8,94,'우유, 대두','/images/productdetail/iceview/2.png');      
insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(3, '/images/icecream/3.png','#eed2ff','ICECREAM','Black Sorbet','블랙 소르베','','반전 매력이 가득! 상큼한 맛이 가득!','3900','초콜릿칩','아몬드봉봉',115,140,22,0,0,0,'우유, 대두','/images/productdetail/iceview/3.png');      
insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(4, '/images/icecream/4.png','#f19bd4','ICECREAM','Chocolate Chip','초콜릿 칩','','바닐라향 아이스크림에 초콜릿 칩이 쏙쏙쏙!','3900','청포도 샤베트','초콜릿칩',115,268,23,4,10,71,'우유, 대두','/images/productdetail/iceview/4.jpg');      
insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(5, '/images/icecream/5.png','#3c713b','ICECREAM','GREEN GRAPE SHERBET','청포도 샤베트','','상큼달콤한 청포도 샤베트&소르베에 청포도 과육이 쏙쏙!','3900','청포도 샤베트','초콜릿칩',115,175,28,0,0.8,12,'우유','/images/productdetail/iceview/5.png');      
insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(6, '/images/icecream/6.png','#684410','ICECREAM','Walnut','월넛','','두뇌 발달에 좋은 고소한 호두가 듬뿍!','3900','자모카 아몬드 훠지','청포도 샤베트',115,276,28,9,6,83,'우유,호두','/images/productdetail/iceview/6.png');      
insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(7, '/images/icecream/7.png','#6f6b69','ICECREAM','Jamoca Almond Fudge','자모카 아몬드 훠지','','깊고 풍부한 자모카 아이스크림에 고소한 아몬드와 초콜릿 훠지 시럽이 들어있는 제품','3900','초콜릿','월넛',115,273,25,5,7,82,'우유','/images/productdetail/iceview/7.png');      
insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(8, '/images/icecream/8.png','#fff99d','ICECREAM','Chocolate','초콜릿','','진하고 부드러운 정통 초콜릿 아이스크림','3900','피스타치오 아몬드','자모카 아몬드 훠지',115,274,24,5,8,85,'우유','/images/productdetail/iceview/8.png');      
insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(9, '/images/icecream/9.png','#836233','ICECREAM','Pistachio Almond','피스타치오 아몬드','','피스타치오와 아몬드가 만나 고소함이 두 배!','3900','그린티','초콜릿',115,302,27,7,8,72,'우유','/images/productdetail/iceview/9.png');      
insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(10, '/images/icecream/10.png','#fcef84','ICECREAM','Green Tea','그린티','','엄선된 녹차를 사용한 싱그러운 그린티 아이스크림','3900','초콜릿 무스','피스타치오 아몬드',115,245,20,5,8,73,'우유','/images/productdetail/iceview/10.png');      
insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(11, '/images/icecream/11.png','#c4a788','ICECREAM','Chocolate Mousse','초콜릿 무스','','초콜릿 칩이 들어있는 진한 초콜릿 아이스크림','3900','이상한 나라의 솜사탕','그린티',115,318,27,5,12,96,'우유,대두','/images/productdetail/iceview/11.png');      
insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(12, '/images/icecream/12.png','#ffaeb8','ICECREAM','Cotton Candy Wonderland','이상한 나라의','솜사탕','부드럽고 달콤한 솜사탕과 함께 떠나는 이상한 나라로의 여행','3900','바닐라','초콜릿 무스',115,287,31,5,10,109,'우유,대두','/images/productdetail/iceview/12.png');      
insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(14, '/images/icecream/14.png','#67869b','ICECREAM','Vanilla','바닐라','','부드럽고 깔끔한 바닐라 아이스크림','3900','바람과 함께 사라지다','이상한 나라의 솜사탕',115,246,21,4,8,174,'우유','/images/productdetail/iceview/14.png');      
insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(15, '/images/icecream/15.png','#c32550','ICECREAM','Twinberry CheeseCake','바람과 함께','사라지다','블루베리와 딸기로 상큼함을 더한 치즈케이크 한 조각','3900','31요거트','바닐라',115,269,25,4,8,95,'우유, 대두, 밀, 계란','/images/productdetail/iceview/15.png');      
insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(16, '/images/icecream/16.png','#396b8e','ICECREAM','31 Yogurt','31요거트','','유산균이 살아 있는 오리지널 요거트 아이스크림','3900','베리베리 스트로 베리','바람과 함께 사라지다',115,198,26,5,4,67,'우유, 대두','/images/productdetail/iceview/16.png');      
insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(17, '/images/icecream/17.png','#126f4a','ICECREAM','Very Berry Strawberry','베리베리','스트로베리','새콤상큼 딸기 과육이 듬뿍!','3900','오레오 쿠키 앤 크림','31요거트',115,228,24,3,7,69,'우유','/images/productdetail/iceview/17.png');      
insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(18, '/images/icecream/18.png','#35221f','ICECREAM','Oreo Cookie´s n Cream','오레오 쿠키 앤 크림','','부드러운 바닐라향 아이스크림에, 달콤하고 진한 오레오 쿠키가 듬뿍!','3900','슈팅스타','베리베리 스트로베리',115,228,18,5,8,127,'우유, 대두, 밀','/images/productdetail/iceview/18.png');      
insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(19, '/images/icecream/19.png','#324b79','ICECREAM','Shooting Star','슈팅스타','','블루베리 & 바닐라향에 입안에서 톡톡 터지는 캔디와 신나는 축제','3900','체리쥬빌레','오레오 쿠키 앤 크림',115,260,27,3,7,65,'우유, 대두, 밀','/images/productdetail/iceview/19.png');      
insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(20, '/images/icecream/20.png','#b45a93','ICECREAM','Cherries Jubilee','체리쥬빌레','','체리과육이 탱글탱글 씹히는 체리 아이스크림','3900','레인보우 샤베트','체리 쥬빌레',115,239,28,3,7,48,'우유','/images/productdetail/iceview/20.png');      
insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(21, '/images/icecream/21.png','#ffeb8e','ICECREAM','Rainbow Sherbet','레인보우 샤베트','','상큼한 파인애플, 오렌지, 라즈베리가 만드는 일곱빛깔 무지개','3900','뉴옥 치즈케이크','체리쥬빌레',115,162,29,3,1,18,'우유','/images/productdetail/iceview/21.png');      
insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(22, '/images/icecream/22.png','#7f5a4d','ICECREAM','New York CheeseCake','뉴욕 치즈케이크','','부드럽게 즐기는 뉴욕식 정통 치즈케이크 아이스크림','3900','민트 초콜릿 칩','레인보우 샤베트',115,295,23,6,10,102,'우유, 대두, 밀','/images/productdetail/iceview/22.png');      
insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(23, '/images/icecream/23.png','#836468','ICECREAM','Mint Chocolate Chip','민트 초콜릿 칩','','쿨한 당신의 선택! 상쾌한 민트향에 초코칩까지!','3900','엄마는 외계인','뉴옥 치즈 케이크',115,295,23,4,9,81,'우유, 대두','/images/productdetail/iceview/23.png');      
insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(24, '/images/icecream/24.png','#f8cb5c','ICECREAM','Puss In Boots','엄마는 외계인','','밀크 초콜릿, 다크 초콜릿, 화이트 무스 세 가지 아이스크림에 달콤 바삭한 초코볼이 더해진 아이스크림','3900','러브미','민트 초콜릿 칩',115,296,23,5,11,114,'우유, 대두, 밀','/images/productdetail/iceview/24.png');      
insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(25, '/images/icecream/25.png','#e5989b','ICECREAM','Loves Me','러브미','','바닐라향, 스트로베리, 블루베리 아이스크림에 색색의 롤리팝 캔디까지!','3900','피치 요거트','엄마는 외계인',115,249,23,4,8,78,'우유, 대두','/images/productdetail/iceview/25.jpg');      
insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(26, '/images/icecream/26.png','#ffb700','ICECREAM','Peach Yogurt','피치 요거트','','상큼한 복숭아 요거트, 복숭아 샤베트에 복숭아 과육이 가득!','3900','봉쥬르, 마카롱','러브미',115,221,36,2,2.7,32,'우유, 대두, 복숭아','/images/productdetail/iceview/26.jpg');      
insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(27, '/images/icecream/27.png','#ff006e','ICECREAM','Bonjour, Macaron','봉쥬르, 마카롱','','부드러운 마스카포네 아이스크림과 마카롱, 초콜릿의 달콤한 만남!','3900','소금 우유 아이스크림','피치 요거트',115,266,23,6,8,86,'우유, 대두, 계란, 땅콩','/images/productdetail/iceview/27.jpg');      
insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(28, '/images/icecream/28.png','#004e98','ICECREAM','Salted Milk Ice Cream','소금 우유 아이스크림','','부드러운 우유 맛 아이스크림 속에 깊은 단 맛을 끌어내는 소금 아이스크림','3900','디노 젤리','봉쥬르, 마카롱',115,227,18,4,7,307,'우유, 대두','/images/productdetail/iceview/28.jpg');      
insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(29, '/images/icecream/29.png','#a7c957','ICECREAM','Dino Jelly','디노 젤리','','파인애플 & 그린 애플 아이스크림에 알록달록 공룡젤리가 콩콩!','3900','북극곰 폴리베어','소금 우유 아이스크림',115,162,29,3,1,18,'우유','/images/productdetail/iceview/29.jpg');      
insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(31, '/images/icecream/31.png','#5aa9e6','ICECREAM','Polar Bear Dip','북극곰 폴라베어','','폴라베어처럼 쿨~한 민트 아이스크림에 크런치가 쏙쏙!','3900','메롱 멜론','디노 젤리',115,280,23,3,12,69,'우유, 대두','/images/productdetail/iceview/32.png');      
insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(32, '/images/icecream/32.png','#e9edc9','ICECREAM','메롱 멜론','메롱 멜론','','메롱 멜론','3900','이상한 나라의 슈팅스타','북극곰 폴리베어',115,218,25,2,4,41,'우유','/images/productdetail/iceview/32.png');      
 insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(33, '/images/icecream/33.png','#ffe5ec','ICECREAM','Shooting Star in Wonderland','이상한 나라의 슈팅스타','','딸기와 블루베리가 들어간 솜사탕 아이스크림에 톡톡 튀는 팝핑캔디로 입안 가득 즐거운 맛','3900','우주 라이크 봉봉','메롱 멜론',115,276,32,4,9,78,'우유, 대두','/images/productdetail/iceview/33.jpg');      
  insert into icecreamdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(34, '/images/icecream/34.png','#dda15e','ICECREAM','Would U Like Bon Bon','우주 라이크 봉봉','','인기 플레이버의 역대급 만남!','3900','','이상한 나라의 슈팅스타',115,292,24,5,8,105,'우유, 대두, 밀','/images/productdetail/iceview/34.png');      
 

  




create table icecream_ingredients (
    iid   int 	auto_increment primary key,
    pid int not null,
    inimage varchar(200) not null,
    inname varchar(100) not null,
    foreign key (pid) references icecream_product(pid)
);



insert into icecream_ingredients (pid, inimage, inname) values
(1, '/images/productdetail/icein/101.png', '민트'),
(1, '/images/productdetail/icein/102.png', '그린애플');
insert into icecream_ingredients (pid, inimage, inname) values
(2, '/images/productdetail/icein/201.png', '바닐라'),
(2, '/images/productdetail/icein/202.png', '밀크초콜릿시럽'),
(2, '/images/productdetail/icein/203.png', '초코아몬드');
insert into icecream_ingredients (pid, inimage, inname) values
(3, '/images/productdetail/icein/301.png', '레몬');
insert into icecream_ingredients (pid, inimage, inname) values
(4, '/images/productdetail/icein/401.png', '바닐라'),
(4, '/images/productdetail/icein/402.png', '초콜릿칩');
insert into icecream_ingredients (pid, inimage, inname) values
(5, '/images/productdetail/icein/501.png', '청포도'),
(5, '/images/productdetail/icein/502.png', '청포도과육');
insert into icecream_ingredients (pid, inimage, inname) values
(6, '/images/productdetail/icein/601.png', '호두'),
(6, '/images/productdetail/icein/602.png', '호두 분태');
insert into icecream_ingredients (pid, inimage, inname) values
(7, '/images/productdetail/icein/701.png', '커피'),
(7, '/images/productdetail/icein/702.png', '초콜릿시럽'),
(7, '/images/productdetail/icein/703.png', '아몬드');
insert into icecream_ingredients (pid, inimage, inname) values
(8, '/images/productdetail/icein/801.png', '초콜릿');
insert into icecream_ingredients (pid, inimage, inname) values
(9, '/images/productdetail/icein/901.png', '피스타치오'),
(9, '/images/productdetail/icein/902.png', '아몬드');
insert into icecream_ingredients (pid, inimage, inname) values
(10, '/images/productdetail/icein/1001.png', '그린티');
insert into icecream_ingredients (pid, inimage, inname) values
(11, '/images/productdetail/icein/1101.png', '초콜릿 무스');
insert into icecream_ingredients (pid, inimage, inname) values
(12, '/images/productdetail/icein/1201.png', '옐로우 솜사탕'),
(12, '/images/productdetail/icein/1202.png', '핑크 솜사탕'),
(12, '/images/productdetail/icein/1203.png', '블루 솜사탕'),
(12, '/images/productdetail/icein/1204.png', '옐로우 크런치'),
(12, '/images/productdetail/icein/1205.png', '핑크 크런치');
insert into icecream_ingredients (pid, inimage, inname) values
(14, '/images/productdetail/icein/1401.png', '바닐라');
insert into icecream_ingredients (pid, inimage, inname) values
(15, '/images/productdetail/icein/1501.png', '치즈'),
(15, '/images/productdetail/icein/1502.png', '블루베리 시럽'),
(15, '/images/productdetail/icein/1503.png', '딸기 시럽'),
(15, '/images/productdetail/icein/1504.png', '치즈케이크 큐브');
insert into icecream_ingredients (pid, inimage, inname) values
(16, '/images/productdetail/icein/1601.png', '요거트');
insert into icecream_ingredients (pid, inimage, inname) values
(17, '/images/productdetail/icein/1701.png', '딸기'),
(17, '/images/productdetail/icein/1702.png', '딸기 과육');
insert into icecream_ingredients (pid, inimage, inname) values
(18, '/images/productdetail/icein/1701.png', '바닐라'),
(18, '/images/productdetail/icein/1702.png', '오레오');
insert into icecream_ingredients (pid, inimage, inname) values
(19, '/images/productdetail/icein/1901.png', '블루 베리'),
(19, '/images/productdetail/icein/1902.png', '바닐라'),
(19, '/images/productdetail/icein/1903.png', '체리 시럽'),
(19, '/images/productdetail/icein/1904.png', '딸기 과육'),
(19, '/images/productdetail/icein/1905.png', '블루 팝핑캔디');
 insert into icecream_ingredients (pid, inimage, inname) values
(20, '/images/productdetail/icein/2001.png', '체리'),
(20, '/images/productdetail/icein/2002.png', '체리 과육');
insert into icecream_ingredients (pid, inimage, inname) values
(21, '/images/productdetail/icein/2101.png', '오렌지'),
(21, '/images/productdetail/icein/2102.png', '파인애플'),
(21, '/images/productdetail/icein/2103.png', '라즈베리');
insert into icecream_ingredients (pid, inimage, inname) values
(22, '/images/productdetail/icein/2201.png', '치즈'),
(22, '/images/productdetail/icein/2202.png', '그라함크래커');
insert into icecream_ingredients (pid, inimage, inname) values
(23, '/images/productdetail/icein/2301.png', '민트'),
(23, '/images/productdetail/icein/2302.png', '초콜릿칩');
insert into icecream_ingredients (pid, inimage, inname) values
(24, '/images/productdetail/icein/2401.png', '밀크 초콜릿'),
(24, '/images/productdetail/icein/2402.png', '화이트 무스'),
(24, '/images/productdetail/icein/2403.png', '다크 초콜릿'),
(24, '/images/productdetail/icein/2404.png', '초콜릿 칩'),
(24, '/images/productdetail/icein/2405.png', '초코 프레첼');
insert into icecream_ingredients (pid, inimage, inname) values
(25, '/images/productdetail/icein/2501.png', '블루베리'),
(25, '/images/productdetail/icein/2502.png', '딸기'),
(25, '/images/productdetail/icein/2503.png', '롤리팝 캔디');
insert into icecream_ingredients (pid, inimage, inname) values
(26, '/images/productdetail/icein/2601.png', '요거트'),
(26, '/images/productdetail/icein/2602.png', '복숭아'),
(26, '/images/productdetail/icein/2603.png', '복숭아과육');
insert into icecream_ingredients (pid, inimage, inname) values
(27, '/images/productdetail/icein/2701.png', '마스카포네 치즈'),
(27, '/images/productdetail/icein/2702.png', '라즈베리 시럽'),
(27, '/images/productdetail/icein/2703.png', '마카롱'),
(27, '/images/productdetail/icein/2704.png', '하트 초콜릿');
insert into icecream_ingredients (pid, inimage, inname) values
(28, '/images/productdetail/icein/2801.png', '소금 우유');
insert into icecream_ingredients (pid, inimage, inname) values
(29, '/images/productdetail/icein/2901.png', '파인애플'),
(29, '/images/productdetail/icein/2902.png', '그린애플'),
(29, '/images/productdetail/icein/2903.png', '젤리');
insert into icecream_ingredients (pid, inimage, inname) values
(31, '/images/productdetail/icein/3101.png', '민트'),
(31, '/images/productdetail/icein/3102.png', '우유');
insert into icecream_ingredients (pid, inimage, inname) values
(32, '/images/productdetail/icein/3201.png', '메론');
insert into icecream_ingredients (pid, inimage, inname) values
(33, '/images/productdetail/icein/3301.png', '블루베리'),
(33, '/images/productdetail/icein/3302.png', '딸기'),
(33, '/images/productdetail/icein/3303.png', '팝핑 캔디');
insert into icecream_ingredients (pid, inimage, inname) values
(34, '/images/productdetail/icein/3401.png', '밀크초콜릿'),
(34, '/images/productdetail/icein/3402.png', '바닐라'),
(34, '/images/productdetail/icein/3403.png', '초코 아몬드'),
(34, '/images/productdetail/icein/3404.png', '초코 프레첼');













create table icecream_relatedproduct (
    rid int   auto_increment primary key,
    pid int,
    relatedimage varchar(255),
    relatedname varchar(100),
    linkname varchar(50),
    linkid int,
   foreign key (pid) references icecream_product(pid)
);





insert into icecream_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(2, '/images/productdetail/icerel/201.png', '골라먹는 27 큐브', 'icecreamcake', 11),
(2, '/images/productdetail/icerel/202.png', '골라먹는 스노우 볼', 'icecreamcake', 7),
(2, '/images/productdetail/icerel/203.png', '나눠먹는 와츄원', 'icecreamcake', 10),
(2, '/images/productdetail/icerel/204.png', '듀얼 와츄원 NO.9', 'icecreamcake', 5);
insert into icecream_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(4, '/images/productdetail/icerel/401.png', '리얼 초코 27 큐브', 'icecreamcake', 8),
(4, '/images/productdetail/icerel/402.png', '반짝이는 잔망루피', 'icecreamcake',12),
(4, '/images/productdetail/icerel/403.png', '하트 쏙~ 샌드 케이크', 'icecreamcake',16);
insert into icecream_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(7, '/images/productdetail/icerel/701.png', '레디팩(자모카 아몬드 훠지)', 'prepack', 4);
insert into icecream_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(8, '/images/productdetail/icerel/801.png', '골라먹는 스노우 볼', 'icecreamcake', 7),
(8, '/images/productdetail/icerel/802.png', '듀얼 와츄원 NO.9', 'icecreamcake',5),
(8, '/images/productdetail/icerel/803.png', '레디팩 미니(초콜릿)', 'prepack',19),
(8, '/images/productdetail/icerel/804.png', '우주에서 온 엄마는 외계인', 'icecreamcake',2);
insert into icecream_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(9, '/images/productdetail/icerel/901.png', '레디팩(피스타치오 아몬드)', 'prepack', 1);
insert into icecream_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(11, '/images/productdetail/icerel/1101.png', '듀얼 와츄원 No.9', 'icecreamcake', 5),
(11, '/images/productdetail/icerel/1102.png', '레디팩(초콜릿 무스)', 'prepack',2),
(11, '/images/productdetail/icerel/1103.png', '블록팩 초콜릿 무스', 'prepack',26);
insert into icecream_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(12, '/images/productdetail/icerel/1201.png', '골라먹는 27 큐브', 'icecreamcake', 11),
(12, '/images/productdetail/icerel/1202.png', '레디팩(이상한 나라의 솜사탕)', 'prepack',5),
(12, '/images/productdetail/icerel/1203.png', '미니 골라먹는 와츄원', 'icecreamcake',4);
insert into icecream_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(14, '/images/productdetail/icerel/1401.png', '나눠먹는 와츄원', 'icecreamcake', 10),
(14, '/images/productdetail/icerel/1402.png', '듀올 와츄원 No.9', 'icecreamcake',5);
insert into icecream_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(15, '/images/productdetail/icerel/1501.png', '블록팩 바람과함께사라지다', 'prepack',33);
insert into icecream_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(16, '/images/productdetail/icerel/1601.png', '듀얼 와츄원 NO.9', 'icecreamcake', 5),
(16, '/images/productdetail/icerel/1602.png', '레디팩(31 요거트)', 'prepack',15);
insert into icecream_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(17, '/images/productdetail/icerel/1701.png', '골라먹는 27 큐브', 'icecreamcake', 11),
(17, '/images/productdetail/icerel/1702.png', '골라먹는 스노우 볼', 'icecreamcake', 7),
(17, '/images/productdetail/icerel/1703.png', '골라먹는 와츄원', 'icecreamcake',6);
insert into icecream_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(18, '/images/productdetail/icerel/1801.png', '골라먹는 스노우 볼', 'icecreamcake', 7),
(18, '/images/productdetail/icerel/1802.png', '레디팩(오레오 쿠키 앤 크림)', 'prepack', 6),
(18, '/images/productdetail/icerel/1803.png', '리얼 초코 27 큐브', 'icecreamcake',8);
insert into icecream_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(19, '/images/productdetail/icerel/1901.png', '골라먹는 27 큐브', 'icecreamcake',11),
(19, '/images/productdetail/icerel/1902.png', '골라먹는 스노우 볼', 'icecreamcake', 6),
(19, '/images/productdetail/icerel/1903.png', '골라먹는 와츄원', 'icecreamcake',8);
insert into icecream_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(20, '/images/productdetail/icerel/2001.png', '골라먹는 27 큐브', 'icecreamcake', 7),
(20, '/images/productdetail/icerel/2002.png', '골라먹는 스노우 볼', 'icecreamcake', 6);
insert into icecream_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(21, '/images/productdetail/icerel/2001.png', '골라먹는 27 큐브', 'icecreamcake', 11),
(21, '/images/productdetail/icerel/2002.png', '골라먹는 스노우 볼', 'icecreamcake', 6),
(21, '/images/productdetail/icerel/2003.png', '골라먹는 와츄원', 'icecreamcake',8);
insert into icecream_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(22, '/images/productdetail/icerel/2201.png', '골라먹는 27 큐브', 'icecreamcake', 11),
(22, '/images/productdetail/icerel/2202.png', '골라먹는 와츄원', 'icecreamcake', 6),
(22, '/images/productdetail/icerel/2203.png', '나눠먹는 와츄원', 'icecreamcake', 10),
(22, '/images/productdetail/icerel/2204.png', '레디팩 (뉴옥 치즈케이크)', 'prepack',14);
insert into icecream_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(23, '/images/productdetail/icerel/2301.png', '골라먹는 27 큐브', 'icecreamcake', 11),
(23, '/images/productdetail/icerel/2302.png', '골라먹는 스노우 볼', 'icecreamcake', 7),
(23, '/images/productdetail/icerel/2303.png', '골라먹는 와츄원', 'icecreamcake', 6),
(23, '/images/productdetail/icerel/2304.png', '레디팩 (민트 초콜릿 칩)', 'prepack',12);
insert into icecream_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(24, '/images/productdetail/icerel/2401.png', '골라먹는 27 큐브', 'icecreamcake', 11),
(24, '/images/productdetail/icerel/2402.png', '골라먹는 스노우 볼', 'icecreamcake', 7),
(24, '/images/productdetail/icerel/2403.png', '골라먹는 와츄원', 'icecreamcake', 6),
(24, '/images/productdetail/icerel/2404.png', '레디팩 (엄마는 외계인)', 'prepack',7);
insert into icecream_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(27, '/images/productdetail/icerel/2701.png', '레디팩(봉쥬르, 마카롱)', 'prepack', 18);


-- -----------------------------------------------------------------------------------------------------------




/**************
prepack_product
****************/



create table prepack_product(
pid 	int 	auto_increment primary key,
name 	varchar(100) not null,
image 	varchar(200) not null,
hash 	varchar(100),
bgcolor  varchar(50),
hashcolor varchar(50),
label  varchar(100),
pdate datetime 
);


   


insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('레디팩(피스타치오 아몬드)','/images/prepack/1.png','#피스타치오 #아몬드','#07504c','#edbb19','',now());
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('레디팩(초콜릿 무스)','/images/prepack/2.png','#초콜릿 #초콜릿칩','#7b594d','#c8930c','',now());
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('레디팩(체리쥬빌레)','/images/prepack/3.png','#체리 #♥','#599c30','#ff6a93','',now());
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('레디팩(자모카 아몬드 훠지)','/images/prepack/4.png','#모카 #초콜릿','#3d1b0f','#c8940d','',now());
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('레디팩(이상한 나라의 솜사탕)','/images/prepack/5.png','#솜사탕','#cce9ff','#ff8cc5','',now());
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('레디팩(오레오 쿠키 앤 크림)','/images/prepack/6.png','#바닐라 #오레오','#544746','#ffb7ce','',now());
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('레디팩(엄마는 외계인)','/images/prepack/7.png','#초콜릿 #초코볼','#cd9c6d','#421010','',now());
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('레디팩(아몬드 봉봉)','/images/prepack/8.png','#초콜릿 #아몬드','#361411','#e6b21d','',now());
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('레디팩(슈팅스타)','/images/prepack/9.png','#블루베리 #바닐라 #팝핑캔디','#1a5693','#a4dbf8','',now());
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('레디팩(소금 우유)','/images/prepack/10.png','#소금우유','#648bcc','#ffffff','',now());
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('레디팩(베리베리 스트로베리)','/images/prepack/11.png','#딸기','#115109','#ff5f6f','',now());
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('레디팩(민트 초콜릿 칩)','/images/prepack/12.png','#초콜릿 #민트','#7e4228','#a4dfd9','',now());
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('레디팩(레인보우 샤베트)','/images/prepack/13.png','#라즈베리 #파인애플 #오렌지','#f39aa9','#f8cb25','',now());
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('레디팩(뉴옥 치즈케이크)','/images/prepack/14.png','#치즈케이크 #치즈','#ba9961','#9a5a19','',now());
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('레디팩(31 요거트)','/images/prepack/15.png','#요거트','#9c8877','#ffffff','',now());
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('레디팩(너는 참 달고나)','/images/prepack/16.png','#달고나 #너는참달고나','#bc6c25','#faedcd','',now());
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('레디팩(초콜릿)','/images/prepack/17.png','#초콜릿','#540b0e','#a98467','',now());
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('레디팩(봉쥬르, 마카롱)','/images/prepack/18.png','#마카롱','#ffb5a7','#c9184a','',now());
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('레디팩 미니 (초콜릿)','/images/prepack/19.png','#초콜릿','#a5796f','#edbb19','',now());
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('레디팩 미니 (바닐라)','/images/prepack/20.png','#바닐라','#ac9272','#fff3d4','',now());
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('레디팩 미니 (아몬드 봉봉)','/images/prepack/21.png','#초콜릿 #아몬드','#ad8562','#38150c','',now());
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('비건 레디팩 미니(오틀리 초콜릿)','/images/prepack/22.png','#비건오틀리 #초콜릿 #레디팩미니','#6096ba','#7f5539','',now());
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('비건 레디팩 미니(오틀리 코코넛 커피)','/images/prepack/23.png','#비건오틀리 #코코넛커피 #레디팩미니','#bde0fe','#9c6644','',now());
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('블록팩 체리쥬빌레','/images/prepack/24.png','#체리 #체리쥬빌레','#c1628b','#ffc8dd','',now()); 
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('블록팩 슈팅스타','/images/prepack/25.png','#바닐라 #블루베리 #체리','#92bdd0','#f64d32','',now()); 
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('블록팩 초콜릿무스','/images/prepack/26.png','#초콜릿','#5b332a','#d7b6a7','',now()); 
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('블록팩 아몬드 봉봉','/images/prepack/27.png','#바닐라 #초콜릿 #초코아몬드','#70593c','#e2d9be','',now()); 
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('블록팩 엄마는 외계인','/images/prepack/28.png','#초콜릿 #화이트무스','#976b3c','#fff3d4','',now()); 
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('블록팩 쿠키앤크림','/images/prepack/29.png','#바닐라 #쿠키','#785859','#e1dcda','',now()); 
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('블록팩 뉴옥치즈케이크','/images/prepack/30.png','#치즈 #크래커','#eaac44','#b6710a','',now()); 
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('블록팩 민트초코봉봉','/images/prepack/31.png','#민트 #초콜릿칩','#81bcb0','#a35118','',now()); 
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('블록팩 이상한나라의솜사탕','/images/prepack/32.png','#솜사탕 #캔디','#c9184a','#fff0f3','',now()); 
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('블록팩 바람과함께사라지다','/images/prepack/33.png','#딸기 #블루베리 #치즈','#fae0e4','#c9184a','',now()); 
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('블록팩 초콜릿','/images/prepack/34.png','#초콜릿','#582f0e','#ddb892','',now()); 
insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('피스타치오 젤라또','/images/prepack/35.png','#피스타치오 #젤라또','#b5e48c','#606c38','',now()); 
  insert into prepack_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('애플망고 젤라또','/images/prepack/36.png','#젤라또 #망고','#ffe6a7','#faa307','',now()); 



create table prepackdetail_product(
did 	int 	auto_increment primary key,
pid 	int not null,
icecreamimage 	varchar(200) not null,
bgcolor 	varchar(50),
line 	varchar(100) not null,
engname	varchar(100),
korname1  varchar(100),
korname2 varchar(100),
dep  varchar(200),
price int,
btnleft varchar(50),
btnright varchar(50),
servingsize int,
calory int,
sugar int,
protein int,
saturatedfat int,
natrium int,
allergy varchar(50),
menuviewimage varchar(200)
);




     
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(1, '/images/prepack/1.png','#07504c','READY PACK','Ready Pack(Pistachio Almond)','레디팩 (피스타치오','아몬드)','피스타치오향과 아몬드가 만나 고소함이 두배!','10800','레디팩 (초콜릿 무스)','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(2, '/images/prepack/2.png','#7b594d','READY PACK','Ready Pack (Chocolate Mousse)','레디팩 (초콜릿','무스)','초콜릿 칩을 곁들여 더욱 진한 초콜릿 무스','10800','레디팩(체리쥬빌레)','레디팩(피스타치오아몬드)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(3, '/images/prepack/3.png','#599c30','READY PACK','Ready Pack(Cherries Jubilee)','레디팩','(체리쥬빌레)','더욱 진해진 체리 쥬빌레에 탱글탱글 체리가 가득','10800','레디팩(자모카 아몬드 훠지)','레디팩(초콜릿 무스)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(4, '/images/prepack/4.png','#3d1b0f','READY PACK','Ready Pack(Jamoca Almond Fudge)','레디팩 (자모카','아몬드 훠지)','은은한 커피에 곁들인 아몬드와 초콜릿 훠지의 조화','10800','레디팩(이상한 나라의 솜사탕)','레디팩(체리쥬빌레)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(5, '/images/prepack/5.png','#cce9ff','READY PACK','Ready Pack(Cotton Candy Wonderland)','레디팩 (이상한','나라의 솜사탕)','부드럽고 달콤한 솜사탕과 함께 떠나는 이상한 나라로의 여행','10800','레디팩(오레오 쿠키 앤 크림)','레디팩(자모카 아몬드 훠지)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(6, '/images/prepack/6.png','#544746','READY PACK','Ready Pack(Oreo Cookies´n Cream)','레디팩 (오레오 쿠키','앤 크림)','부드러운 바닐라 아이스크림에 달콤한 오레오 쿠키가 가득!','10800','레디팩(엄마는 외계인)','레디팩(이상한 나라의 솜사탕)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(7, '/images/prepack/7.png','#cd9c6d','READY PACK','Ready Pack(Puss In Boots)','레디팩 (엄마는','외계인)','밀크 초콜릿, 다크 초콜릿, 화이트 무스 세 가지 아이스크림에 달콤 바삭한 초코볼이 더해진 아이스크림','10800','레디팩(아몬드 봉봉)','레디팩(오레오 쿠키 앤 크림)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(8, '/images/prepack/8.png','#361411','READY PACK','Ready Pack(Almond Bonbon)','레디팩 (아몬드','봉봉)','입안 가득 즐거운 초콜릿, 풍부한 초코 아몬드가 더욱 달콤하게','10800','레디팩(슈팅스타)','레디팩(엄마는 외계인)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(9, '/images/prepack/9.png','#1a5693','READY PACK','Ready Pack(Shooting Star)','레디팩 (슈팅스타)','','블루베리 아이스크림, 바닐라 맛 아이스크림 속에 팝핑 캔디와 체리 리본이 쏙쏙','10800','레디팩(소금 우유)','레디팩(아몬드 봉봉)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(10, '/images/prepack/10.png','#648bcc','READY PACK','Ready Pack (Salted Milk Ice Cream)','레디팩 (소금 우유)','','부드러운 우유맛 아이스크림에 소금이 어우러져 풍미 가득한 아이스크림','10800','레디팩(베리베리 스트로베리)','레디팩(슈팅스타)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(11, '/images/prepack/11.png','#115109','READY PACK','Ready Pack(Very Berry Strawberry)','레디팩 (베리베리','스트로베리)','스트로베리 아이스크림에 상큼한 딸기를 함께','10800','레디팩(민트 초콜릿 칩)','레디팩(소금 우유)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(12, '/images/prepack/12.png','#7e4228','READY PACK','Ready Pack(Mint Chocolate Chip)','레디팩 (민트 초콜릿','칩)','상쾌한 민트 아이스크림에 초콜릿 칩이 콕콕!','10800','레디팩(레인보우 샤베트)','레디팩(베리베리 스트로베리)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(13, '/images/prepack/13.png','#f39aa9','READY PACK','Ready Pack(Rainbow Sherbet)','레디팩 (레인보우','샤베트)','상큼한 라즈베리, 파인애플, 오렌지 샤베트','10800','레디팩(뉴옥 치즈케이크)','레디팩(민트 초콜릿 칩)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(14, '/images/prepack/14.png','#ba9961','READY PACK','Ready Pack(Newyork Cheesecake)','레디팩 (뉴욕','치즈케이크)','뉴욕식 정통 치즈케이크를 더욱 깊고 풍부하게!','10800','레디팩(31 요거트)','레디팩(레인보우 샤베트)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(15, '/images/prepack/15.png','#9c8877','READY PACK','Ready Pack(31 Yogurt)','레디팩 (31 요거트)','','유산균이 살아 있는 오리지널 요거트 아이스크림','10800','레디팩(너는 참 달고나)','레디팩(뉴옥 치즈케이크)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(16, '/images/prepack/16.png','#bc6c25','READY PACK','Ready Pack (You Are So Dalgona)','레디팩 (너는 참','달고나)','달콤한 카라멜 아이스크림에 바삭한 달고나가 쏘옥~','10800','레디팩(초콜릿)','레디팩(31 요거트)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(17, '/images/prepack/17.png','#540b0e','READY PACK','Ready Pack (Chocolate)','레디팩 (초콜릿)','','부드럽고 진한 클래식 초콜릿 아이스크림','10800','레디팩(봉쥬르, 마카롱)','레디팩(너는 참 달고나)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(18, '/images/prepack/18.png','#ffb5a7','READY PACK','Ready Pack (Bonjour, Macaron)','레디팩 (봉쥬르,','마카롱)','부드러운 마스카포네 아이스크림과 마카롱, 초콜릿의 달콤한 만남!','10800','레디팩 미니(초콜릿)','레디팩(초콜릿)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(19, '/images/prepack/19.png','#a5796f','READY PACK','Ready Pack Mini (Chocolate)','레디팩 미니','(초콜릿)','부드럽고 진한 클래식 초콜릿 아이스크림','6300','레디팩 미니(바닐라)','레디팩(봉쥬르, 마카롱)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(20, '/images/prepack/20.png','#ac9272','READY PACK','Ready Pack Mini (Vanila)','레디팩 미니','(바닐라)','부드럽고 깔끔한 바닐라 아이스크림','6300','레디팩 미니(아몬드 봉봉)','레디팩 미니(초콜릿)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(21, '/images/prepack/21.png','#ad8562','READY PACK','Ready Pack Mini (Almond Bonbon)','레디팩 미니 (아몬드','봉봉)','입안 가득 즐거운 초콜릿, 풍부한 초코 아몬드가 더욱 달콤하게','6300','비건 레디팩 미니(오틀리 초콜릿)','레디팩 미니(바닐라)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(22, '/images/prepack/22.png','#6096ba','READY PACK','Vegan OATLY Chocolate Ready Pack Mini','비건 레디팩 미니','(오틀리 초콜릿)','달콤 쌉싸름한 초콜릿 풍미가 가득한 비런 레디팩 미니','6300','비건 레디팩 미니(오틀리 코코넛 커피)','레디팩 미니(아몬드 봉봉)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(23, '/images/prepack/23.png','#bde0fe','READY PACK','Vegan OATLY Coconut Coffee Ready Pack Mini','비건 레디팩 미니','(오틀리 코코넛 커피)','부드러운 커피와 달콤한 코코넛이 조화로운 비건 레디팩 미니','6300','피스타치오 젤라또','비건 레디팩 미니(오틀리 초콜릿)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(24, '/images/prepack/24.png','#c1628b','BLOCK PACK','Block Pack (Cherries Jubilee)','블록팩 체리쥬빌레','','체리쥬빌레를 새로워진 블록팩으로 만나 보세요!','4000','블록팩 슈팅스타','비건 레디팩 미니(오틀리 코코넛 커피)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(25, '/images/prepack/25.png','#92bdd0','BLOCK PACK','Block Pack (Shooting Star)','블록팩 슈팅스타','','슈팅스타를 새로워진 블록팩으로 만나 보세요!','4000','블록팩 초콜릿무스','블록팩 체리쥬빌레',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(26, '/images/prepack/26.png','#5b332a','BLOCK PACK','Block Pack (Chocolate Mousse)','블록팩 초콜릿무스','','초콜릿 무스를 새로워진 블록팩으로 만나 보세요!','4000','블록팩 아몬드봉봉','블록팩 슈팅스타',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(27, '/images/prepack/27.png','#70593c','BLOCK PACK','Block Pack (Almond Bonbon)','블록팩 아몬드봉봉','','아몬드 봉봉을 새로워진 블록팩으로 만나 보세요!','4000','블록팩 엄마는 외계인','블록팩 초콜릿무스',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(28, '/images/prepack/28.png','#976b3c','BLOCK PACK','Block Pack (Puss In Boots)','블록팩','엄마는외계인','엄마는 외계인을 새로워진 블록팩으로 만나 보세요!','4000','블록팩 쿠키앤크림','블록팩 아몬드봉봉',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(29, '/images/prepack/29.png','#976b3c','BLOCK PACK','Block Pack (Cookies and Cream)','블록팩 쿠키앤크림','','쿠키앤크림을 새로워진 블록팩으로 만나 보세요!','4000','블록팩 뉴옥치즈케이크','블록팩 엄마는외계인',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(30, '/images/prepack/30.png','#eaac44','BLOCK PACK','Block Pack (Newyork Cheesecake)','블록팩','뉴욕치즈케이크','뉴욕치즈케이크를 새로워진 블록팩으로 만나 보세요!','4000','블록팩 민트초코봉봉','블록팩 쿠키앤크림',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(31, '/images/prepack/31.png','#81bcb0','BLOCK PACK','Block Pack (Mint Chocolate Bonbon)','블록팩','민트초코봉봉','민트초코봉봉을 새로워진 블록팩으로 만나 보세요!','4000','블록팩 이상한나라의솜사탕','블록팩 뉴옥치즈케이크',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(32, '/images/prepack/32.png','#c9184a','BLOCK PACK','Block Pack (Cotton Candy Wonderland)','블록팩','이상한나라의솜사탕','이상한 나라의 솜사탕을 새로워진 블록팩으로 만나보세요!','4000','블록팩 바람과함께사라지다','블록팩 민트초코봉봉',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(33, '/images/prepack/33.png','#fae0e4','BLOCK PACK','Block Pack (Twinberry Cheesecake)','블록팩','바람과함께사라지다','바람과 함께 사라지다를 새로워진 블록팩으로 만나보세요!','4000','블록팩 초콜릿','블록팩 이상한나라의솜사탕',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(34, '/images/prepack/34.png','#582f0e','BLOCK PACK','Block Pack (Chocolate))','블록팩 초콜릿','','진하고 부드러운 정통 초콜릿 아이스크림','4000','애플망고 젤라또','블록팩 바람과함께사라지다',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      
insert into prepackdetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(36, '/images/prepack/36.png','#ffe6a7','BLOCK PACK','Apple Mango Gelato','애플망고 젤라또','','상큼달콤한 망고의 맛을 그대로!','4000','','블록팩 초콜릿',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'');      






create table prepack_ingredients (
    iid   int 	auto_increment primary key,
    pid int not null,
    inimage varchar(200) not null,
    inname varchar(100) not null,
    foreign key (pid) references prepack_product(pid)
);




insert into prepack_ingredients (pid, inimage, inname) values
(1, '/images/productdetail/prein/101.png', '피스타치오'),
(1, '/images/productdetail/prein/102.png', '아몬드');
insert into prepack_ingredients (pid, inimage, inname) values
(2, '/images/productdetail/prein/201.png', '초콜릿 무스'),
(2, '/images/productdetail/prein/202.png', '초코 후레이크');
insert into prepack_ingredients (pid, inimage, inname) values
(3, '/images/productdetail/prein/301.png', '체리'),
(3, '/images/productdetail/prein/302.png', '체리 과육');
insert into prepack_ingredients (pid, inimage, inname) values
(4, '/images/productdetail/prein/401.png', '커피'),
(4, '/images/productdetail/prein/402.png', '초콜릿시럽'),
(4, '/images/productdetail/prein/403.png', '아몬드');
insert into prepack_ingredients (pid, inimage, inname) values
(5, '/images/productdetail/prein/501.png', '옐로우 솜사탕'),
(5, '/images/productdetail/prein/502.png', '핑크 솜사탕'),
(5, '/images/productdetail/prein/503.png', '블루 솜사탕'),
(5, '/images/productdetail/prein/504.png', '옐로우 크런치'),
(5, '/images/productdetail/prein/505.png', '핑크 크런치');
insert into prepack_ingredients (pid, inimage, inname) values
(6, '/images/productdetail/prein/601.png', '바닐라'),
(6, '/images/productdetail/prein/602.png', '오레오');
insert into prepack_ingredients (pid, inimage, inname) values
(7, '/images/productdetail/prein/701.png', '밀크초콜릿'),
(7, '/images/productdetail/prein/702.png', '화이트 무스'),
(7, '/images/productdetail/prein/703.png', '초콜릿'),
(7, '/images/productdetail/prein/704.png', '초콜릿 칩'),
(7, '/images/productdetail/prein/705.png', '초코 프레첼');
insert into prepack_ingredients (pid, inimage, inname) values
(8, '/images/productdetail/prein/801.png', '바닐라'),
(8, '/images/productdetail/prein/802.png', '밀크초콜릿시럽'),
(8, '/images/productdetail/prein/803.png', '초코아몬드');
insert into prepack_ingredients (pid, inimage, inname) values
(9, '/images/productdetail/prein/901.png', '블루베리'),
(9, '/images/productdetail/prein/902.png', '바닐라'),
(9, '/images/productdetail/prein/903.png', '체리 시럽'),
(9, '/images/productdetail/prein/904.png', '삼색레인보우'),
(9, '/images/productdetail/prein/905.png', '블루 팹핑캔디');
insert into prepack_ingredients (pid, inimage, inname) values
(10, '/images/productdetail/prein/1001.png', '소금우유');
insert into prepack_ingredients (pid, inimage, inname) values
(11, '/images/productdetail/prein/1101.png', '딸기'),
(11, '/images/productdetail/prein/1102.png', '딸기 과육');
insert into prepack_ingredients (pid, inimage, inname) values
(12, '/images/productdetail/prein/1201.png', '민트'),
(12, '/images/productdetail/prein/1202.png', '초콜릿 칩');
insert into prepack_ingredients (pid, inimage, inname) values
(13, '/images/productdetail/prein/1301.png', '오렌지'),
(13, '/images/productdetail/prein/1302.png', '파인애플'),
(13, '/images/productdetail/prein/1303.png', '라즈베리');
insert into prepack_ingredients (pid, inimage, inname) values
(14, '/images/productdetail/prein/1401.png', '치즈'),
(14, '/images/productdetail/prein/1402.png', '그라함 크래커');
insert into prepack_ingredients (pid, inimage, inname) values
(15, '/images/productdetail/prein/1501.png', '요거트');
insert into prepack_ingredients (pid, inimage, inname) values
(16, '/images/productdetail/prein/1601.png', '솔티 카라멜');
insert into prepack_ingredients (pid, inimage, inname) values
(19, '/images/productdetail/prein/1901.png', '초콜릿');
insert into prepack_ingredients (pid, inimage, inname) values
(20, '/images/productdetail/prein/2001.png', '바닐라');
insert into prepack_ingredients (pid, inimage, inname) values
(21, '/images/productdetail/prein/2101.png', '바닐라'),
(21, '/images/productdetail/prein/2102.png', '밀크 초콜릿 시럽'),
(21, '/images/productdetail/prein/2103.png', '초코 아몬드');
insert into prepack_ingredients (pid, inimage, inname) values
(22, '/images/productdetail/prein/2201.png', '초콜릿');
insert into prepack_ingredients (pid, inimage, inname) values
(23, '/images/productdetail/prein/2301.png', '코코넛'),
(23, '/images/productdetail/prein/2302.png', '커피');
insert into prepack_ingredients (pid, inimage, inname) values
(24, '/images/productdetail/prein/2401.png', '체리'),
(24, '/images/productdetail/prein/2402.png', '체리 과육');
insert into prepack_ingredients (pid, inimage, inname) values
(25, '/images/productdetail/prein/2501.png', '블루베리'),
(25, '/images/productdetail/prein/2502.png', '바닐라'),
(25, '/images/productdetail/prein/2503.png', '체리 시럽'),
(25, '/images/productdetail/prein/2504.png', '삼색레인보우'),
(25, '/images/productdetail/prein/2505.png', '블루 팹핑캔디');
insert into prepack_ingredients (pid, inimage, inname) values
(26, '/images/productdetail/prein/2601.png', '초콜릿 무스'),
(26, '/images/productdetail/prein/2602.png', '초코 후레이크');
insert into prepack_ingredients (pid, inimage, inname) values
(27, '/images/productdetail/prein/2701.png', '바닐라'),
(27, '/images/productdetail/prein/2702.png', '밀크 초콜릿 시럽'),
(27, '/images/productdetail/prein/2703.png', '초코 아몬드');
insert into prepack_ingredients (pid, inimage, inname) values
(28, '/images/productdetail/prein/2801.png', '밀크초콜릿'),
(28, '/images/productdetail/prein/2802.png', '화이트 무스'),
(28, '/images/productdetail/prein/2803.png', '초콜릿'),
(28, '/images/productdetail/prein/2804.png', '초콜릿 칩'),
(28, '/images/productdetail/prein/2805.png', '초코 프레첼');
insert into prepack_ingredients (pid, inimage, inname) values
(29, '/images/productdetail/prein/2901.png', '바닐라'),
(29, '/images/productdetail/prein/2902.png', '쿠키');
insert into prepack_ingredients (pid, inimage, inname) values
(30, '/images/productdetail/prein/3001.png', '바닐라'),
(30, '/images/productdetail/prein/3002.png', '쿠키');
insert into prepack_ingredients (pid, inimage, inname) values
(31, '/images/productdetail/prein/3101.png', '민트'),
(31, '/images/productdetail/prein/3102.png', '초콜릿 칩'),
(31, '/images/productdetail/prein/3103.png', '초코 프레첼');
insert into prepack_ingredients (pid, inimage, inname) values
(32, '/images/productdetail/prein/3201.png', '옐로우 솜사탕'),
(32, '/images/productdetail/prein/3202.png', '핑크 솜사탕'),
(32, '/images/productdetail/prein/3203.png', '블루 솜사탕'),
(32, '/images/productdetail/prein/3204.png', '옐로우 크런치'),
(32, '/images/productdetail/prein/3205.png', '핑크 크런치');
insert into prepack_ingredients (pid, inimage, inname) values
(33, '/images/productdetail/prein/3301.png', '치즈'),
(33, '/images/productdetail/prein/3302.png', '블루베리 시럽'),
(33, '/images/productdetail/prein/3302.png', '딸기 시럽'),
(33, '/images/productdetail/prein/3303.png', '치즈케이크 큐브');
insert into prepack_ingredients (pid, inimage, inname) values
(34, '/images/productdetail/prein/3401.png', '초콜릿');
insert into prepack_ingredients (pid, inimage, inname) values
(36, '/images/productdetail/prein/3601.png', '망고');



create table prepack_relatedproduct (
    rid int   auto_increment primary key,
    pid int,
    relatedimage varchar(255),
    relatedname varchar(100),
    linkname varchar(50),
    linkid int,
   foreign key (pid) references prepack_product(pid)
);




insert into prepack_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(1, '/images/productdetail/prerel/101.png', '피스타치오 아몬드', 'icecream', 9);
insert into prepack_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(2, '/images/productdetail/prerel/201.png', '초콜릿 무스', 'icecream', 11);
insert into prepack_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(3, '/images/icecream/20.png', '체리 쥬빌레', 'icecream', 20);
insert into prepack_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(4, '/images/icecream/7.png', '자모카 아몬드 훠지', 'icecream', 7);
insert into prepack_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(5, '/images/productdetail/prerel/501.png', '이상한 나라의 솜사탕', 'icecream', 33);
insert into prepack_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(6, '/images/icecream/7.png', '오레오 쿠키 앤 크림', 'icecream', 18);
insert into prepack_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(7, '/images/icecream/24.png', '엄마는 외계인', 'icecream', 24);
insert into prepack_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(8, '/images/icecream/2.png', '아몬드 봉봉', 'icecream', 2);
insert into prepack_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(9, '/images/icecream/19.png', '슈팅스타', 'icecream', 19);
insert into prepack_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(11, '/images/icecream/17.png', '베리베리 스트로베리', 'icecream', 17);
insert into prepack_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(12, '/images/icecream/23.png', '민트 초콜릿 칩', 'icecream', 23);
insert into prepack_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(13, '/images/icecream/21.png', '레인보우 샤베트', 'icecream', 21);
insert into prepack_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(14, '/images/icecream/22.png', '뉴옥치즈 케이크', 'icecream', 22);
insert into prepack_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(15, '/images/icecream/16.png', '31요거트', 'icecream', 16);
insert into prepack_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(17, '/images/icecream/8.png', '31요거트', 'icecream', 8);
insert into prepack_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(18, '/images/icecream/27.png', '봉쥬르, 마카롱', 'icecream', 27);
insert into prepack_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(19, '/images/icecream/8.png', '초콜릿', 'icecream', 8);
insert into prepack_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(20, '/images/icecream/14.png', '바닐라', 'icecream', 14);
insert into prepack_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(21, '/images/icecream/2.png', '아몬드 봉봉', 'icecream', 2);
insert into prepack_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(24, '/images/icecream/20.png', '체리쥬빌레', 'icecream', 20);
insert into prepack_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(25, '/images/icecream/19.png', '슈팅스타', 'icecream', 19);
insert into prepack_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(26, '/images/icecream/11.png', '초콜릿 무스', 'icecream', 11);
insert into prepack_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(27, '/images/icecream/2.png', '아몬드 봉봉', 'icecream', 2);
insert into prepack_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(28, '/images/icecream/24.png', '엄마는 외계인', 'icecream', 24);
insert into prepack_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(29, '/images/icecream/18.png', '오레오 쿠키 앤 크림', 'icecream', 18);
insert into prepack_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(30, '/images/icecream/22.png', '뉴옥 치즈케이크', 'icecream', 22);
insert into prepack_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(32, '/images/icecream/12.png', '이상한 나라의 솜사탕', 'icecream', 12);
insert into prepack_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(33, '/images/icecream/15.png', '바람과 함께 사라지다', 'icecream', 15);







--  ------------------------------------------------------------------------------------------------------------------------



/*****************
icecreamcake_product
****************/



create table icecreamcake_product(
pid 	int 	auto_increment primary key,
name 	varchar(100) not null,
image 	varchar(200) not null,
hash 	varchar(100),
bgcolor  varchar(50),
hashcolor varchar(50),
label  varchar(100),
pdate datetime 
);

 






insert into icecreamcake_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('해피 버스데이','/images/icecreamcake/1.png','#딸기 #아몬드 #초콜릿 #오레오','#ffec71','#ff637d','',now());
insert into icecreamcake_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('우주에서 온 엄마는 외계인','/images/icecreamcake/2.png','#우주에서온엄마는외계인 #민트초콜릿칩 #베리베리스트로베리 #아몬드봉봉','#345fa3','#fabec8','',now());
insert into icecreamcake_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('미니 해피 버스데이 케이크','/images/icecreamcake/3.png','#초콜릿 #딸기 #바나나 #민트','#fcadc0','#a3dcf8','',now());
insert into icecreamcake_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('미니 골라먹는 와츄원','/images/icecreamcake/4.png','#치즈 #솜사탕 #민트 #초콜릿','#cafffb','#ff637d','',now());
insert into icecreamcake_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('듀얼 와츄원 No.9','/images/icecreamcake/5.png','#초콜릿 #치즈 #딸기 #아몬드','#ffe9f6','#fe899d','',now());
insert into icecreamcake_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('골라먹는 와츄원','/images/icecreamcake/6.png','#치즈 #민트 #딸기 #초콜릿','#92d7d3','#f9f4d1','',now());
insert into icecreamcake_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('골라먹는 스노우 볼','/images/icecreamcake/7.png','#초콜릿 #딸기 #바나나 #민트','#77afd7','#fff7e4','',now());
insert into icecreamcake_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('리얼 초코 27 큐브','/images/icecreamcake/8.png','#리얼초코 #9가지맛','#ede5e0','#6b4135','',now());
insert into icecreamcake_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('스페셜 데이','/images/icecreamcake/9.png','#스페셜데이','#4ea2c9','#f5b4d8','',now());
insert into icecreamcake_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('나눠먹는 와츄원','/images/icecreamcake/10.png','#나워먹는와츄원 #초콜릿 #민트초콜릿칩 #뉴옥치즈케이크','#77afd7','#fff7e4','',now());
insert into icecreamcake_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('골라먹는 27 큐브','/images/icecreamcake/11.png','#딸기 #치즈케이크 #민트','#ffd898','#fe5456','',now());
insert into icecreamcake_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('반짝이는 잔망루피','/images/icecreamcake/12.png','#반짝이는잔망루피 #바나나 #초콜릿칩 #트리플초콜릿','#fadf89','#ff7e98','',now());
insert into icecreamcake_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('나눠먹는 큐브 와츄원','/images/icecreamcake/13.png','#나눠먹는큐브와츄원 #레인보우샤베트 #민트초콜릿칩 #바닐라','#8b503d','#fccbd6','',now());
insert into icecreamcake_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('올 어바웃 초코','/images/icecreamcake/14.png','#올어바웃초코 #초콜릿 #초콜릿무스','#f5d7bd','#5e3719','',now());
insert into icecreamcake_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('해피 스마일 포 유','/images/icecreamcake/15.png','#레인보우샤베트 #체리 #트리플초콜릿 #베리베리스트로베리 #민트','#fdf8e1','#ff7b00','',now());
insert into icecreamcake_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('하트 쏙~샌드 케이크','/images/icecreamcake/16.png','#초콜릿무스 #초콜릿칩 #밀크초콜릿 #초콜릿','#fff0f3','#ff5d8f','',now());
insert into icecreamcake_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('더 베스트 No.6','/images/icecreamcake/17.png','#베리베리스트로베리 #레인보우샤베트 #슈팅스타 #엄마는외계인','#c9184a','#ffbd00','',now());
insert into icecreamcake_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('달콤한 구름이 퐁당퐁당','/images/icecreamcake/18.png','#체리 #솜사탕 #바닐라','#a2d2ff','#0077b6','',now());
insert into icecreamcake_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('해피 조이 큐브','/images/icecreamcake/19.png','#바나나 #체리 #이상한나라의솜사탕 #스트로베리 #슈팅스타','#f5cac3','#ef476f','',now());
insert into icecreamcake_product(name, image, hash, bgcolor, hashcolor, label, pdate) 
	values('우주 라이크 봉봉 케이크','/images/icecreamcake/20.png','#이달의 케이크 #우주라이크봉봉케이크','#bc6c25','#220901','',now());






create table icecreamcakedetail_product(
did 	int 	auto_increment primary key,
pid 	int not null,
icecreamimage 	varchar(200) not null,
bgcolor  	varchar(50),
line 	varchar(100) not null,
engname	varchar(100),
korname1  varchar(100),
korname2 varchar(100),
dep  varchar(200),
price int,
btnleft varchar(50),
btnright varchar(50),
servingsize int,
calory int,
sugar int,
protein int,
saturatedfat int,
natrium int,
allergy varchar(50),
menuviewimage varchar(200)
);



     
     
insert into icecreamcakedetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(1, '/images/icecreamcake/1.png','#ffec71','ICECREAM CAKE','Happy Birthday Cake','해피 버스데이','','레트로 감성의 컬러풀한 스프링클스와 달콤한 레터링 초코로 모두의 생일을 특별하게 만들어 줄 케이크','27000','우주에서 온 엄마는 외계인','',Null,Null,Null,Null,Null,Null,Null,'/images/productdetail/cakeview/101.jpg');      
insert into icecreamcakedetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(2, '/images/icecreamcake/2.png','#345fa3','ICECREAM CAKE','Puss In Boots Cake','우주에서 온 엄마는','외계인','BR을 대표하는 플레이버! 부동의 NO.1 플레이버 ´엄마는 외계인´을 컨셉으로 한 ONLY BR 케이크','28000','미니 해피 버스데이 케이크','해피 버스데이',Null,Null,Null,Null,Null,Null,Null,'/images/productdetail/cakeview/201.jpg');      
insert into icecreamcakedetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(3, '/images/icecreamcake/3.png','#fcadc0','ICECREAM CAKE','Mini Happy Birthday Cake','미니 해피 버스데이','케이크','레트로 감성의 귀엽고 화사한 메세지 케이크로 언제 어디서나 부담없이 즐길 수 있는 미니 케이크','17000','미니 골라먹는 와츄원','우주에서 온 엄마는 외계인',Null,Null,Null,Null,Null,Null,Null,'/images/productdetail/cakeview/301.jpg');      
insert into icecreamcakedetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(4, '/images/icecreamcake/4.png','#cafffb','ICECREAM CAKE','Mini What You Want','미니 골라먹는','와츄원','BR 베스트셀러 골라먹는 와츄원의 미니 버전! 다양한 맛을 골라먹는 매력에 가성비까지 더해진 매력만점 미니 케이크','17000','듀얼 와츄원 NO.9','미니 해피 버스데이 케이크',Null,Null,Null,Null,Null,Null,Null,'/images/productdetail/cakeview/401.jpg');      
insert into icecreamcakedetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(5, '/images/icecreamcake/5.png','#ffe9f6','ICECREAM CAKE','Dual What You Want No.9','듀얼 와츄원 NO.9','','16가지 베스트 플레이버로 구성된 풍성한 볼륨감의 베스트셀러 케이크','31000','골라먹는 와츄원','미니 골라먹는 와츄원',Null,Null,Null,Null,Null,Null,Null,'/images/productdetail/cakeview/501.jpg');      
insert into icecreamcakedetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(6, '/images/icecreamcake/6.png','#92d7d3','ICECREAM CAKE','What You Want','골라먹는 와츄원','','다양한 맛을 골라먹는 재미가 있는 아이스크림 케이크','27000','골라먹는 스노우 볼','듀얼 와츄원 NO.9',Null,Null,Null,Null,Null,Null,Null,'/images/productdetail/cakeview/601.jpg');      
insert into icecreamcakedetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(7, '/images/icecreamcake/7.png','#77afd7','ICECREAM CAKE','Snowball What You Want','골라먹는 스노우 볼','','동글동글 스노우 볼을 가득! BR의 아이스크림을 한입에 쏙~ 넣어 즐길 수 있는 스노우 볼 케이크','28000','리얼 초코 27 큐브','골라먹는 와츄원',Null,Null,Null,Null,Null,Null,Null,'/images/productdetail/cakeview/701.jpg');      
insert into icecreamcakedetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(8, '/images/icecreamcake/8.png','#ede5e0','ICECREAM CAKE','Real Chocolate 27 Cube','리얼 초코 27 큐브','','달콤한 초콜릿 판 위에서 즐기는 9가지의 다양한 초콜릿 아이스크림 맛을 가진 리얼 초코 27 큐브!','29000','스페셜 데이','골라먹는 스노우 볼',Null,Null,Null,Null,Null,Null,Null,'/images/productdetail/cakeview/801.jpg');      
insert into icecreamcakedetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(9, '/images/icecreamcake/9.png','#4ea2c9','ICECREAM CAKE','Special Day','스페셜 데이','','특별한 날을 더 특별하게 만들어주는 스페셜 데이 케이크!','27000','나눠먹는 와츄원','리얼 초코 27 큐브',Null,Null,Null,Null,Null,Null,Null,'/images/productdetail/cakeview/901.jpg');      
insert into icecreamcakedetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(10, '/images/icecreamcake/10.png','#77afd7','ICECREAM CAKE','What You Want To Share','나눠먹는 와츄원','','다양한 종류의 데코와 아이스크림을 트레이로 편리하게 나눠먹고, 보관까지 쉬운 케이크','33000','골라먹는 27 큐브','스페셜 데이',Null,Null,Null,Null,Null,Null,Null,'/images/productdetail/cakeview/1001.png');      
insert into icecreamcakedetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(11, '/images/icecreamcake/11.png','#ffd898','ICECREAM CAKE','27 Cube What You Want','골라먹는 27 큐브','','9가지 맛 아이스크림 바이트를 초콜릿 판 위에 쌓아올려 전체 다 취식 가능한 실속있는 케이크','29000','반짝이는 잔망루피','나눠먹는 와츄원',Null,Null,Null,Null,Null,Null,Null,'/images/productdetail/cakeview/1101.jpg');      
insert into icecreamcakedetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(12, '/images/icecreamcake/12.png','#fadf89','ICECREAM CAKE','Shining Zanmang Loopy','반짝이는 잔망루피','','대세 캐릭터 ´잔망루피´와 별 모양 포크로 귀여움과 실속 모두 잡은 케이크','30000','나눠먹는 큐브 와츄원','골라먹는 27 큐브',Null,Null,Null,Null,Null,Null,Null,'/images/productdetail/cakeview/1201.png');      
insert into icecreamcakedetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(13, '/images/icecreamcake/13.png','#8b503d','ICECREAM CAKE','What You Want Cube To Share','나눠먹는 큐브','와츄원','큐브 아이스크림을 개별 트레이로 편리하고 깔끔하게 나눠 먹는 BR 스테디셀러 케이크','34000','몰 어바웃 초코','반짝이는 잔망루피',Null,Null,Null,Null,Null,Null,Null,'/images/productdetail/cakeview/1301.jpg');      
insert into icecreamcakedetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(14, '/images/icecreamcake/14.png','#f5d7bd','ICECREAM CAKE','All About Chocolate','올 어바웃 초코','','배스킨 초콜릿의 모든 것! 초콜릿의 정석을 즐길 수 있는 케이크','24000','해피 스마일 포 유','나눠먹는 큐브 와츄원',Null,Null,Null,Null,Null,Null,Null,'/images/productdetail/cakeview/1401.jpg');      
insert into icecreamcakedetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(15, '/images/icecreamcake/15.png','#fdf8e1','ICECREAM CAKE','Happy Smile FYou','해피 스마일 포 유','','즐거움 가득한 너를 위한 해피 스마일','26000','하트 쏙~ 샌드 케이크','올 어바웃 초코',Null,Null,Null,Null,Null,Null,Null,'/images/productdetail/cakeview/1501.jpg');      
insert into icecreamcakedetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(16, '/images/icecreamcake/16.png','#fff0f3','ICECREAM CAKE','Sand Cake With Loveu','하트 쏙 ~ 샌드','케이크','아이스크림 사이 숨겨진 하트로 전하는 마음','28000','더 베스트 No.6','해피 스마일 포 유',Null,Null,Null,Null,Null,Null,Null,'/images/productdetail/cakeview/1601.jpg');      
insert into icecreamcakedetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(17, '/images/icecreamcake/17.png','#c9184a','ICECREAM CAKE','The Best No.6','더 베스트 No.6','','6가지의 베스트 플레이버를 부담 없이 맛 볼 수 있는 제품','25000','달콤한 구름이 퐁당퐁당','하트 쏙~ 샌드 케이크',Null,Null,Null,Null,Null,Null,Null,'/images/productdetail/cakeview/1701.jpg');      
insert into icecreamcakedetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(18, '/images/icecreamcake/18.png','#a2d2ff','ICECREAM CAKE','Sweet Clouds Pong Dang','달콤한 구름이','퐁당퐁당','달콤한 구름 위를 퐁당퐁당! 함께 즐기며 나눠먹기 편리한 케이크','26000','해피 조이 큐브','더 베스트 No.6',Null,Null,Null,Null,Null,Null,Null,'/images/productdetail/cakeview/1801.jpg');      
insert into icecreamcakedetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(19, '/images/icecreamcake/19.png','#f5cac3','ICECREAM CAKE','Happy Joy Cube','해피 조이 큐브','','12가지의 달콤한 행복! 나눠먹는 즐거움이 가득!','26000','어썸 라이언 인 사파리','달콤한 구름이 퐁당퐁당',Null,Null,Null,Null,Null,Null,Null,'/images/productdetail/cakeview/1901.jpg');      
 insert into icecreamcakedetail_product(pid, icecreamimage, bgcolor, line, engname, korname1,
 korname2, dep, price, btnleft, btnright, 
 servingsize, calory, sugar, protein, saturatedfat, natrium, allergy, menuviewimage ) 
	values(20, '/images/icecreamcake/20.png','#bc6c25','ICECREAM CAKE','Would U Like Bon Bon Cake','우주 라이크 봉봉','케이크','BR UNIVERSE의 아몬드 봉봉, 엄마는 외계인 두 행성이 충돌한 모습을 표현한 역동적인 비주얼과 함께 7가지 다양한 맛을 즐길 수 있는 케이크','30000','','해피 조이 큐브',Null,Null,Null,Null,Null,Null,Null,'/images/productdetail/cakeview/2001.png');      

 
 


create table icecreamcake_relatedproduct (
    rid int   auto_increment primary key,
    pid int,
    relatedimage varchar(255),
    relatedname varchar(100),
    linkname varchar(50),
    linkid int,
   foreign key (pid) references icecreamcake_product(pid)
);





insert into icecreamcake_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(1, '/images/productdetail/cakerel/101.png', '레인보우 샤베트', 'icecream', 21),
(1, '/images/productdetail/cakerel/102.png', '바닐라', 'icecream', 14),
(1, '/images/productdetail/cakerel/103.png', '베리베리 스트로베리', 'icecream', 17);
insert into icecreamcake_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(2, '/images/productdetail/cakerel/201.png', '레인보우 샤베트', 'icecream', 21),
(2, '/images/productdetail/cakerel/202.png', '민트 초콜릿 칩', 'icecream', 23),
(2, '/images/productdetail/cakerel/203.png', '베리베리 스트로 베리', 'icecream', 17),
(2, '/images/productdetail/cakerel/204.png', '아몬드 봉봉', 'icecream', 2),
(2, '/images/productdetail/cakerel/205.png', '엄마는 외계인', 'icecream', 24);
insert into icecreamcake_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(3, '/images/productdetail/cakerel/301.png', '베리베리 스트로베리', 'icecream', 17),
(3, '/images/productdetail/cakerel/302.png', '초콜릿', 'icecream', 8);
insert into icecreamcake_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(4, '/images/productdetail/cakerel/401.png', '뉴옥 치즈케이크', 'icecream', 22),
(4, '/images/productdetail/cakerel/402.png', '레인보우 샤베트', 'icecream', 21),
(4, '/images/productdetail/cakerel/403.png', '슈팅스타', 'icecream', 19),
(4, '/images/productdetail/cakerel/404.png', '엄마는 외계인', 'icecream', 24),
(4, '/images/productdetail/cakerel/405.png', '이상한 나라의 솜사탕', 'icecream', 20);
insert into icecreamcake_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(5, '/images/productdetail/cakerel/501.png', '31요거트', 'icecream', 16),
(5, '/images/productdetail/cakerel/502.png', '뉴옥 치즈케이크', 'icecream', 22),
(5, '/images/productdetail/cakerel/503.png', '바닐라', 'icecream', 14);
insert into icecreamcake_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(6, '/images/productdetail/cakerel/601.png', '뉴옥 치즈케이크', 'icecream', 22),
(6, '/images/productdetail/cakerel/602.png', '레인보우 샤베트', 'icecream', 21),
(6, '/images/productdetail/cakerel/603.png', '민트 초콜릿 칩', 'icecream', 19),
(6, '/images/productdetail/cakerel/604.png', '베리베리 스트로 베리', 'icecream', 24);
insert into icecreamcake_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(7, '/images/productdetail/cakerel/701.png', '레인보우 샤베트', 'icecream', 21),
(7, '/images/productdetail/cakerel/702.png', '민트 초콜릿 칩', 'icecream', 23),
(7, '/images/productdetail/cakerel/703.png', '베리베리 스트로베리', 'icecream', 17),
(7, '/images/productdetail/cakerel/704.png', '슈팅스타', 'icecream', 19),
(7, '/images/productdetail/cakerel/705.png', '아몬드 봉봉', 'icecream', 2);
insert into icecreamcake_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(8, '/images/productdetail/cakerel/801.png', '아몬드 봉봉', 'icecream', 2),
(8, '/images/productdetail/cakerel/802.png', '엄마는 외계인', 'icecream', 24),
(8, '/images/productdetail/cakerel/803.png', '오레오 쿠키 앤 크림', 'icecream', 18),
(8, '/images/productdetail/cakerel/804.png', '초콜릿', 'icecream', 8);
insert into icecreamcake_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(9, '/images/productdetail/cakerel/901.png', '민트 초콜릿 칩', 'icecream', 23),
(9, '/images/productdetail/cakerel/902.png', '바닐라', 'icecream', 14),
(9, '/images/productdetail/cakerel/903.png', '베리베리 스트로베리', 'icecream', 17),
(9, '/images/productdetail/cakerel/904.png', '아몬드 봉봉', 'icecream', 2);
insert into icecreamcake_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(10, '/images/productdetail/cakerel/701.png', '레인보우 샤베트', 'icecream', 21),
(10, '/images/productdetail/cakerel/702.png', '민트 초콜릿 칩', 'icecream', 23),
(10, '/images/productdetail/cakerel/703.png', '베리베리 스트로베리', 'icecream', 17),
(10, '/images/productdetail/cakerel/902.png', '바닐라', 'icecream', 14),
(10, '/images/productdetail/cakerel/704.png', '슈팅스타', 'icecream', 19),
(10, '/images/productdetail/cakerel/705.png', '아몬드 봉봉', 'icecream', 2);
insert into icecreamcake_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(11, '/images/productdetail/cakerel/502.png', '뉴옥 치즈케이크', 'icecream', 22),
(11, '/images/productdetail/cakerel/701.png', '레인보우 샤베트', 'icecream', 21),
(11, '/images/productdetail/cakerel/702.png', '민트 초콜릿 칩', 'icecream', 23),
(11, '/images/productdetail/cakerel/703.png', '베리베리 스트로베리', 'icecream', 17),
(11, '/images/productdetail/cakerel/802.png', '엄마는 외계인', 'icecream', 24),
(11, '/images/productdetail/cakerel/703.png', '베리베리 스트로베리', 'icecream', 17),
(11, '/images/productdetail/cakerel/704.png', '슈팅스타', 'icecream', 19),
(11, '/images/productdetail/cakerel/705.png', '아몬드 봉봉', 'icecream', 2);
insert into icecreamcake_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(12, '/images/productdetail/cakerel/701.png', '레인보우 샤베트', 'icecream', 21),
(12, '/images/productdetail/cakerel/702.png', '민트 초콜릿 칩', 'icecream', 23),
(12, '/images/productdetail/cakerel/703.png', '베리베리 스트로베리', 'icecream', 17),
(12, '/images/productdetail/cakerel/704.png', '슈팅스타', 'icecream', 19),
(12, '/images/productdetail/cakerel/705.png', '아몬드 봉봉', 'icecream', 2),
(12, '/images/productdetail/cakerel/802.png', '엄마는 외계인', 'icecream', 24),
(12, '/images/productdetail/cakerel/804.png', '초콜릿', 'icecream', 8);
insert into icecreamcake_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(13, '/images/productdetail/cakerel/701.png', '레인보우 샤베트', 'icecream', 21),
(13, '/images/productdetail/cakerel/702.png', '민트 초콜릿 칩', 'icecream', 23),
(13, '/images/productdetail/cakerel/902.png', '바닐라', 'icecream', 14),
(13, '/images/productdetail/cakerel/703.png', '베리베리 스트로베리', 'icecream', 17),
(13, '/images/productdetail/cakerel/704.png', '슈팅스타', 'icecream', 19),
(13, '/images/productdetail/cakerel/705.png', '아몬드 봉봉', 'icecream', 2),
(13, '/images/productdetail/cakerel/802.png', '엄마는 외계인', 'icecream', 24);
insert into icecreamcake_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(14, '/images/productdetail/cakerel/804.png', '초콜릿', 'icecream', 8),
(14, '/images/productdetail/cakerel/1402.png', '초콜릿 무스', 'icecream', 11);
insert into icecreamcake_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(15, '/images/productdetail/cakerel/701.png', '레인보우 샤베트', 'icecream', 21),
(15, '/images/productdetail/cakerel/702.png', '민트 초콜릿 칩', 'icecream', 23),
(15, '/images/productdetail/cakerel/703.png', '베리베리 스트로베리', 'icecream', 17),
(15, '/images/productdetail/cakerel/704.png', '슈팅스타', 'icecream', 19),
(15, '/images/productdetail/cakerel/802.png', '엄마는 외계인', 'icecream', 24);
insert into icecreamcake_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(16, '/images/productdetail/cakerel/804.png', '초콜릿', 'icecream', 8),
(16, '/images/productdetail/cakerel/1402.png', '초콜릿 무스', 'icecream', 11),
(16, '/images/productdetail/cakerel/1603.png', '초콜릿 칩', 'icecream', 4);
insert into icecreamcake_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(17, '/images/productdetail/cakerel/701.png', '레인보우 샤베트', 'icecream', 21),
(17, '/images/productdetail/cakerel/902.png', '바닐라', 'icecream', 14),
(17, '/images/productdetail/cakerel/703.png', '베리베리 스트로베리', 'icecream', 17),
(17, '/images/productdetail/cakerel/704.png', '슈팅스타', 'icecream', 19),
(17, '/images/productdetail/cakerel/802.png', '엄마는 외계인', 'icecream', 24);
insert into icecreamcake_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(18, '/images/productdetail/cakerel/701.png', '레인보우 샤베트', 'icecream', 21),
(18, '/images/productdetail/cakerel/702.png', '민트 초콜릿 칩', 'icecream', 23),
(18, '/images/productdetail/cakerel/902.png', '바닐라', 'icecream', 14),
(18, '/images/productdetail/cakerel/703.png', '베리베리 스트로베리', 'icecream', 17),
(18, '/images/productdetail/cakerel/705.png', '아몬드 봉봉', 'icecream', 2),
(18, '/images/productdetail/cakerel/802.png', '엄마는 외계인', 'icecream', 24),
(18, '/images/productdetail/cakerel/1402.png', '초콜릿 무스', 'icecream', 11);
insert into icecreamcake_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(19, '/images/productdetail/cakerel/1901.png', '31 요거트', 'icecream', 16),
(19, '/images/productdetail/cakerel/502.png', '뉴옥 치즈케이크', 'icecream', 22),
(19, '/images/productdetail/cakerel/701.png', '레인보우 샤베트', 'icecream', 21),
(19, '/images/productdetail/cakerel/502.png', '뉴옥 치즈케이크', 'icecream', 22),
(19, '/images/productdetail/cakerel/703.png', '베리베리 스트로베리', 'icecream', 17),
(19, '/images/productdetail/cakerel/704.png', '슈팅스타', 'icecream', 19),
(19, '/images/productdetail/cakerel/405.png', '이상한 나라의 솜사탕', 'icecream', 20);
insert into icecreamcake_relatedproduct (pid, relatedimage, relatedname, linkname, linkid ) values
(20, '/images/productdetail/cakerel/1901.png', '31 요거트', 'icecream', 16),
(20, '/images/productdetail/cakerel/705.png', '아몬드 봉봉', 'icecream', 2),
(20, '/images/productdetail/cakerel/802.png', '엄마는 외계인', 'icecream', 24),
(20, '/images/productdetail/cakerel/1402.png', '초콜릿 무스', 'icecream', 11);

select * from icecreamdetail_product;
select * from prepackdetail_product;
select * from icecreamcakedetail_product;

select 
  ip.pid,
  icecreamimage,
  bgcolor,
  line,
  engname,
  korname1,
  korname2,
  dep,
  price,
  btnleft,
  btnright,
  servingsize,
  calory,
  sugar,
  protein,
  saturatedfat,
  natrium,
  allergy,
  menuviewimage,
  inimage, 
  inname
from icecreamdetail_product ip, icecream_ingredients ii
where ip.pid = ii.pid and ip.pid = 33;
--
 select pid, inimage, inname from icecream_ingredients where pid= 33;
--




   select rno, id, name, image, hash, label, bgcolor, hashcolor  from 
      (select row_number() over(order by pdate desc) as rno, 
      pid as id, 
      name,
      image,
      hash,
      label,
      bgcolor,
      hashcolor
      from icecream_product) ip
      where rno between 1 and 50;
-- ---------------------------------------------------------------------------------------

create table BR_MEMBER(
user_id varchar(30) primary key,
user_pass varchar(80) not null,
user_name varchar(10) not null,
email_id varchar(20) not null,
email_domain varchar(20) not null,
phone char(13) not null, -- phone char(13)로 입력하면 010-1234-5678 이 상태로 저장됨
zipcode char(5),
address varchar(40),
signup_date datetime
);
desc br_member;
select * from br_member;

create table br_cart(
cid int auto_increment primary key,
pid_ic int,
pid_cake int,
pid_pre int,
size varchar(10) not null,
qty int default(1), -- 장바구니에 넣을때 기본으로 1개가 들어가게 함
cdate datetime,      -- (수량선택해서 넣을때는 default값 넣으면 안됨!)
user_id varchar(30) not null,
constraint fk_br_cart_user_id foreign key(user_id)
references br_member(user_id) -- user_id 참조하기
);

select * from br_cart;
delete from br_cart;

set sql_safe_updates = 0;

select count(*) from
(select row_number() over(order by cdate desc) as rno, image, name, size, qty , format(price,0) as price
from
(select sd.icecreamimage as image, sd.korname1 as name,
bc.size, bc.qty, sd.price, bc.cid, bc.pid_ic, bc.user_id, bc.cdate
from br_cart bc, icecreamdetail_product sd, prepackdetail_product sp, 
icecreamcakedetail_product sc
where bc.pid_ic = sd.pid or bc.pid_pre = sp.pid or bc.pid_cake = sc.pid) t1
where user_id = "lee") t;


select  row_number() over(order by cdate desc) as rno ,sd.icecreamimage as image, sd.korname1 as name,
bc.size, bc.qty, sd.price, bc.cid, bc.pid_ic, bc.user_id, bc.cdate
from br_cart bc, icecreamdetail_product sd, prepackdetail_product sp, 
icecreamcakedetail_product sc
where bc.pid_ic = sd.pid or bc.pid_pre = sp.pid or bc.pid_cake = sc.pid;

select sd.icecreamimage as image, sd.korname1 as name,
bc.size, bc.qty, sd.price, bc.cid, bc.pid_ic, bc.user_id, bc.cdate
from br_cart bc, icecreamdetail_product sd
where bc.pid_ic = sd.pid
union all
select sp.icecreamimage as image, sp.korname1 as name,
bc.size, bc.qty, sp.price, bc.cid, bc.pid_ic, bc.user_id, bc.cdate
from br_cart bc, prepackdetail_product sp
where bc.pid_pre = sp.pid
union all
select sc.icecreamimage as image, sc.korname1 as name,
bc.size, bc.qty, sc.price, bc.cid, bc.pid_ic, bc.user_id, bc.cdate
from br_cart bc, icecreamcakedetail_product sc
where bc.pid_cake = sc.pid;


select sd.icecreamimage as image, sd.korname1 as name,
              bc.size, bc.qty, format(sd.price,0) price, bc.cid, bc.pid_ic, bc.user_id, bc.cdate
              from br_cart bc, icecreamdetail_product sd
              where bc.pid_ic = sd.pid and user_id = 'lee'
              union all
              select sp.icecreamimage as image, sp.korname1 as name,
              bc.size, bc.qty, format(sp.price,0) price, bc.cid, bc.pid_ic, bc.user_id, bc.cdate
              from br_cart bc, prepackdetail_product sp
              where bc.pid_pre = sp.pid and user_id = 'lee'
              union all
              select sc.icecreamimage as image, sc.korname1 as name,
              bc.size, bc.qty, format(sc.price,0) price, bc.cid, bc.pid_ic, bc.user_id, bc.cdate
              from br_cart bc, icecreamcakedetail_product sc
              where bc.pid_cake = sc.pid and user_id = 'lee';

select * from br_cart;
select * from icecreamdetail_product;
select * from prepackdetail_product;
select * from icecreamcakedetail_product;


use hrdb2019;
select database();

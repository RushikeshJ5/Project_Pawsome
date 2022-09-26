create database pawsomedb1;
use pawsomedb1;
create table admin (id int primary key auto_increment,fname varchar(45),lname varchar(45),email varchar(45), password varchar(20),phone varchar(12));
create table location(pincode int auto_increment primary key, location varchar(45));
create table user(uid int auto_increment primary key,fname varchar(45),lname varchar(45),mobile varchar(12),email varchar(25)
,password varchar(25),pincode int,drid int ,foreign key(pincode) references location(pincode));
create table doctor(drid int auto_increment primary key, fname varchar(45), lname varchar(45), mobile varchar(12), email varchar(25),
 password varchar(25), pincode int, foreign key(pincode) references location(pincode));
 create table dog(did int auto_increment primary key, dname varchar(45), dage varchar(25), dbreed varchar(25));
 create table community(cid int auto_increment primary key, cname varchar(45), pincode int, foreign key(pincode) references location(pincode));
 create table hostel(hid int auto_increment primary key, hname varchar(45),contact varchar(12));
 create table drappointment(aid int auto_increment primary key,clinctime varchar(45),drid int);
 create table dimage(imid int auto_increment primary key, did int , image varchar(255));
 alter table drappointment change clinctime clinictime varchar(40);
 insert into admin values(1,"Admin","Admin","aa1234@gmail.com","test","9875456511");
 insert into dimage values(1,1,"/images_1"),(2,2,"/images_2");
 show tables;
 select * from dimage;
 
 select * from user;
select * from doctor;
select * from dog; 
select * from community;
select * from location;
select * from admin;
select * from hostel;
select * from drappointment;

insert into drappointment values(1,"10am to 5pm",1),(2,"10:30am to 6pm",2),(3,"11am to 7pm",3); 

alter table user drop foreign key drid;
drop table doctor;
drop table adoption;

delete from user where uid="4";


insert into user values(1,"Prasad", "Patil", "9856451236", "pp1234@gmail.com", "test",411005,1);
 insert into  location values(411001,"Akurdi"),(411002,"Aundh"),(411003,"Hadapsar"),(411004,"Kothrud"),(411005,"Katraj"),(411006,"Kharadi");
 insert into user values(2,"Mayur", "Mane", "9856411224", "mm1234@gmail.com", "test",411003,2);
 insert into doctor values(1,"Sandeep","Bhosale","9845655555","sb12345@gmail.com","test","411002");
 insert into doctor values(2,"Ved","Shinde","9988445566","vs1234@gmail.com","test","411006");
 insert into doctor values(3,"John","Deer","9898565544","jd1234@gmail.com","test","411005");
 alter table dog add column uid int;
 insert into dog values("8","Jack","1months","doberman",null);
 
 delete from hostel where hid=4;
 

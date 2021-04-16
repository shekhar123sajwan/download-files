var br = "";

function nameGen(type){
	var tp = type;
	var nm1 = ["Abhay","Abhi","Abhijeet","Abhilash","Abhinav","Abhishek","Adarsh","Aditya","Ajay","Akash","Akshat","Akshay","Amar","Amit","Amitesh","Amol","Anand","Anant","Anil","Anirudh","Anish","Ankit","Ankush","Anmol","Anshu","Anuj","Arav","Arjun","Arman","Arpit","Arun","Arvind","Ashish","Ashok","Ashutosh","Ashwin","Atish","Avinash","Avish","Ayush","Badri","Bajrang","Balram","Bansilal","Bhairav","Bhanu","Bharat","Bhargav","Bhavnesh","Bhola","Bholanath","Bhuvan","Birju","Champak","Chandan","Chatur","Chetak","Chetan","Chikku","Chinmay","Chirag","Chitesh","Daksh","Dakshit","Damodar","Darpan","Darshan","Darsheel","Darshil","Deeksha","Deepak","Dev","Devang","Devansh","Devashish","Devilal","Dhana","Dhruv","Dilip","Divakar","Divyanshu","Diwakar","Durgesh","Eshaan","Eshwar","Gajanan","Ganesh","Garv","Gaurav","Gaurishanker","Gautam","Ghanshyam","Giriraj","Girish","Gopal","Govind","Hari","Hariram","Harish","Harman","Harsh","Harsha","Harshal","Harshit","Harshvardhan","Himanshu","Hrithik","Jagdeep","Jagdip","Jagdish","Jai","Jaiprakash","Jatin","Jay","Jeevan","Kabir","Kailash","Kalpesh","Kalyan","Kamal","Kanhaiya","Kanishk","Kapeesh","Kapil","Kapish","Karan","Kaushal","Keshav","Kishan","Kishore","Kunal","Kush","Kushal","Laabh","Lakhan","Laksh","Lalit","Lavan","Laxman","Lokesh","Luv","Madan","Madhav","Magan","Manas","Manav","Mandaar","Manish","Manthan","Mayank","Mayor","Meghaj","Meghraj","Mehul","Mihir","Milind","Mitesh","Mohan","Mohit","Moksh","Mrinal","Mudit","Mukesh","Mukul","Mukund","Naksh","Nakul","Naman","Namit","Nandi","Naresh","Natwar","Naveen","Navneet","Neatik","Neel","Neeraj","Neil","Netik","Nihal","Nihar","Nikhil","Nikunj","Nilesh","Niraj","Nishant","Nitish","Panav","Pankaj","Parag","Paresh","Parikshit","Parimal","Parth","Pavan","Piyush","Prabhu","Pradeep","Praful","Prakash","Pramod","Pranav","Pranay","Prashant","Prateek","Pratik","Praveen","Prem","Pruthvi","Pukhraj","Pulkit","Punit","Purshottam","Raghav","Raghu","Raghvender","Rahul","Raj","Raja","Rajat","Rajeev","Rakesh","Rakshit","Ram","Ramavtar","Ranbir","Ravi","Rishab","Rishi","Rishit","Ritwik","Rohan","Rohit","Ronak","Roshan","Rudra","Rujul","Rupesh","Sachin","Sahil","Saket","Salil","Sampat","Sandeep","Sanjay","Santosh","Sarvesh","Saurabh","Saurav","Shantanu","Sharan","Shashank","Shekhar","Shirish","Shubh","Shyam","Siddharth","Sirish","Sohan","Sunil","Tanay","Tanmai","Tanmay","Tanuj","Tarak","Tarun","Tej","Tripurari","Tushar","Vaibhav","Varun"];
	var nm2 = ["Arooshi","Aaradhya","Aarti","Aarvi","Aashika","Abha","Abhilasha","Adhisha","Aditi","Akansha","Akkhila","Akriti","Akshara","Alisha","Alka","Amisha","Anandi","Ananya","Aneesha","Anika","Anisha","Anishka","Anjali","Anju","Ankita","Anokhi","Antara","Anuja","Anupama","Anuradha","Anusha","Anushree","Anushri","Aparna","Apeksha","Apoorva","Archita","Arjita","Arnika","Arohi","Arpita","Arshi","Aruna","Arushi","Arvi","Arzoo","Asha","Astha","Avanti","Avni","Ayushi","Babita","Barkha","Basanti","Bela","Bhagwati","Bhagyashree","Bhairavi","Bhanu","Bhanumati","Bharti","Bhawana","Bhawani","Bhumi","Bindiya","Champa","Chanchal","Chanda","Chandani","Charu","Charvi","Chaya","Cheena","Chetna","Chitralekha","Damini","Deepa","Deepali","Deepika","Deepti","Devi","Devika","Devyani","Diksha","Dipika","Disha","Diti","Divya","Divyakshi","Ekta","Garima","Gauri","Gayatri","Gita","Gitika","Gunjan","Harshita","Hema","Hemakshi","Hemlata","Himani","Ishita","Jahnavi","Jaya","Jeevika","Juhi","Jyoti","Jyotika","Jyotsna","Kajal","Kamala","Kanak","Kanchan","Kanika","Karishma","Kausalya","Kavita","Kavya","Khushbu","Khushi","Khyati","Kiran","Kirti","Komal","Kriti","Kritika","Kumud","Lakshita","Lalita","Lata","Lavanya","Leela","Lirisha","Maahi","Madhushri","Mahima","Maina","Malika","Mallika","Mamta","Manali","Manasvee","Manju","Mansi","Mayuri","Meena","Megha","Mihika","Minakshi","Minal","Mohini","Mounika","Mukta","Mukti","Muskan","Naina","Nalini","Namrata","Navya","Neelam","Neeti","Neha","Nehal","Nidhi","Niharika","Nikharika","Nirmala","Nisha","Padma","Palak","Parul","Parvati","Payal","Pia","Pooja","Prachi","Pragya","Pranjali","Preeti","Priyanka","Puja","Rachana","Radhika","Rajnandini","Rajni","Rajshree","Rakhee","Rani","Rashi","Rashmi","Rekha","Richa","Ridhi","Ridhima","Rinki","Rishita","Rita","Ritika","Ritu","Roshini","Ruchi","Ruchita","Ruhi","Rukmini","Saloni","Samyukta","Sandhya","Sangeeta","Sanjana","Santoshi","Sapna","Sarika","Sarita","Shakuntala","Shanti","Sheela","Shefali","Shilpa","Shipra","Shivangi","Shobha","Shobhana","Shradha","Shruthi","Shruti","Shubha","Shubra","Shweta","Sneha","Tamanna","Tanisha","Tanushree","Tanvi","Tanya","Tapasya","Tara","Taruni","Tasha","Tina","Tisha","Tiya","Tripti","Trisha","Tulsi","Tushika","Udaya","Uma","Unnati","Urmi","Urmilla","Usha","Vaishala","Vamshika","Vandana","Vani","Varsha","Veena","Vibha","Vibhuti","Vidhi","Vidhya","Vimla","Vinita","Vishakayashika","Yashaswi","Yashica","Yashoda","Yashomati","Yukta","Yuktha","Yuvika"];
	var nm3 = ["Agarwal","Agarwalla","Aggarwal","Agrawal","Ajmera","Asthana","Awasthi","Bagaria","Bagla","Bagrecha","Bagri","Baid","Bainsla","Bajaj","Bajla","Bajpai","Bamb","Bangad","Bangur","Bansal","Banthia","Bartwal","Baurai","Bawalia","Bedmutha","Bhadoria","Bhagat","Bhalotia","Bhandari","Bhangadia","Bharatia","Bhartiya","Bhati","Bhattad","Bhut","Bhutoria","Bhuwalka","Bindal","Binjola","Birla","Bisht","Biyani","Buchasia","Chamaria","Chand","Chandak","Chandels","Chandra","Chandratre","Chandratreya","Changedia","Chaturvedi","Chaubey","Chaudhary","Chauhan","Chopra","Choraria","Choudhary","Daga","Dahad","Dalamia","Dalmia","Dashattor","Dave","Deopura","Deorah","Dhalawat","Dhanuka","Dhasmana","Dhoni","Dhoot","Dhounndiyal","Didwania","Dingliwal","Dixit","Dubey","Dudavewala","Dugar","Dwivedi","Gadia","Gadodia","Gandhi","Ganeriwal","Gangh","Garg","Garodia","Ghatori","Ghilidiyal","Ghuwalewala","Goal","Goenka","Golecha","Goyal","Goyanaka","Gulia","Gupta","Gurjar","Gusain","Heda","Innani","Jain","Jaipuria","Jajodia","Jaju","Jalan","Jangra","Jhajharia","Jhanwar","Jhawar","Jhunjhunuwala","Jhunjhunwala","Jindal","Joshi","Juyal","Kabra","Kaintura","Kalawat","Kandari","Kandpal","Kankaria","Kanodia","Kansal","Karamchand","Karwa","Kasana","Kathotia","Kauntia","Kaura","Kaushal","Kayal","Kayan","Kedia","Kejriwal","Khaitan","Khandelwal","Khatri","Khemka","Khetan","Killa","Kothari","Kothiyal","Kukreti","Kumavat","Kushwaha","Lahoti","Lahoty","Lakhotia","Lohia","Loyalka","Maheshwari","Malani","Maloo","Malpani","Malu","Mandelia","Mandhana","Mandhania","Manral","Manudhana","Maskara","Mathur","Maurya","Meena","Mehrotra","Mehta","Mewara","Mishra","Misra","Mittal","Moda","Modi","Mohanka","Mohata","Mohta","Mokati","Morarka","Mour","Mourya","Mundra","Munot","Murarka","Nagar","Nagda","Naugai","Nautiyal","Negi","Nekadi","Nevatia","Nigam","Niraniya","Oswal","Painuly","Pandey","Panwar","Parasrampuria","Patodia","Patwa","Patwari","Poddar","Prahladka","Puranmalka","Rai","Rajawat","Rajput","Rana","Rastogi","Rathee","Rathi","Rathore","Rawat","Ruia","Rungta","Rupramka","Rustagi","Saboo","Saklani","Salecha","Sanghi","Saraf","Saraff","Saraogi","Saravagi","Sarda","Sarpal","Sawani","Saxena","Sekhsaria","Seksaria","Sethi","Sewak","Shah","Shahalia","Sharma","Shekhawat","Shrimali","Singh","Singhal","Singhania","Singhi","Singhvi","Sodani","Sodhani","Somani","Sonthalia","Srivastava","Sultania","Surana","Sureka","Swarnkar","Tantia","Tanwar","Taparia","Tayal","Tekriwal","Thakur","Thapliyal","Tibrewal","Tiwari","Todi","Tola","Toshniwal","Totla","Tripathi","Trivedi","Uniyal","Upadhayay","Vaid","Vajpai","Verma","Visariya","Vyas","Yadav"];
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		rnd3 = Math.random() * nm3.length | 0;
		if(tp === 1){
			rnd = Math.random() * nm2.length | 0;
			names = nm2[rnd] + " " + nm3[rnd3];
			nm2.splice(rnd, 1);
		}else{
			rnd = Math.random() * nm1.length | 0;
			names = nm1[rnd] + " " + nm3[rnd3];
			nm1.splice(rnd, 1);
		}
		nm3.splice(rnd3, 1);
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(names));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}
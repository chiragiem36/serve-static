const express = require('express');
const app = express()

app.set('views','views')
app.set('view engine','ejs')
app.use('/coaching/:r/:username',function(req,res){
	switch(req.params.r){
		case 'faculty_mobile':
			res.render('coaching/faculty_mobile');
			break;

		case 'admin_home':
			res.render('coaching/admin_home',{title:'',user:req.params.username});
			break;
	}
})
app.use('/static/coaching',express.static('public/coaching'))

app.listen(process.env.PORT || 4000)

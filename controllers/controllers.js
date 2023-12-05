const article = require('../model/feed')

const goHomePage = (req,res) =>{
    article.find()
    .then(result => {res.render('index', {users : result})})
    .catch(err => {console.log(err)});
    
};

const createPost = (req,res)=>{
    let article1 = new article(req.body);
    article1.save()
    .then(()=> {res.redirect('/')})
    .catch(err =>{err});
}

const deleteUser = (req, res) => {
    article.findByIdAndDelete(req.params.id)
    .then(()=> {res.redirect('/')})
    .catch(err =>{ console.log(err)});    
}

const getArticle = (req, res) =>{
    article.findById(req.params.id)
    .then(result => {
        res.render('feed' , {
            user :result,
        })
    })
    .catch(err => {res.render('404')
})
}

const editArticle =(req, res) =>{
    article.findById(req.params.id)
    .then(result => {
        res.render('edit' , {
            user :result,
        })
    })
    .catch(err => {res.render('404')
})
}

const updatePost = (req, res) =>{
   article.findByIdAndUpdate(req.params.id, req.body)
   .then(result => {
    res.render('feed', {
        user :result,
    })
   })
   .catch(err => console.log(err))
}


module.exports ={
    goHomePage,   
    createPost,     
    deleteUser,
    getArticle,
    editArticle,
    updatePost,
}

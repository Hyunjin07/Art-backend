let DUMMY_PAINTINGS = [
    {
        id:'p1',
        title:'Cat',
        description:'',
        creator:'u1'
    }
];

const getPaintingById = (res,req,next) =>{
    const paintingId = req.params.pid
    const painting = DUMMY_PAINTINGS.find(p => {
        return p.id === paintingId // return 특정 그림을 찾은후 painting에 할당후에 res.json실행 다시코드 반복X    });
    })
    
    if(!painting){
        //error 
    }
    res.json({painting});
};

const getPaintingByUserId = (res, req, next) => {
    const userId = req.params.userId

    const painting = DUMMY_PAINTINGS.filter(p =>{
        return p.creator === userId
    });

    if(!painting){
        //error 
    }

};




exports.getPaintingById = getPaintingById;
exports.getPaintingByUserId = getPaintingByUserId;

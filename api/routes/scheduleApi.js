const express = require('express');
const axios = require('axios');
const router = express.Router();
const ArrivalSchedule = require('../models/arrivalSchedule');
const mongoose = require('mongoose');
const schedule = require('node-schedule');
var LIST_OF_ARRIVALS = [];
var ARRIVAL_SCHEDULE_JOBS = [];
var LIST = [];

var qs = require('querystring');

//<----------------------FUNCTIONS------------------------------>

//<===========================Testing req/res=============================>
router.get('', (req, res, next) => {
    res.status(200).json({
        message: 'Get request handled!'
    });
});

router.post('', (req, res, next) => {
    res.status(200).json({
        message: 'Post request handled!'
    });
});


//<===========================ArrivalSchedule API =======================>

//<---------------------------------Arrival schedule jobs-------------------------------->

const initializeScheduleJobs = async () => {
    var date = new Date(); 
    var date1 = new Date(
        date.getFullYear(), 
        date.getMonth(), 
        date.getDate() + 1,
        date.getHours(), 
        date.getMinutes(), 
        date.getSeconds()
    );

    var date2 = new Date(
        date.getFullYear(), 
        date.getMonth(), 
        date.getDate() + 1,
        date.getHours(), 
        date.getMinutes() + 1, 
        date.getSeconds()
    );

    await ArrivalSchedule.find({date_of_arrival: {$gt: date1, $lt: date2}})
    .exec()
    .then(docs => {
        LIST_OF_ARRIVALS = docs;
        console.log(docs);
    })
    .catch(err => {
        console.log(err);
    });


    //for loop for extracting information for schedule node
    // WE MUST CONSIDER TIMEZONES, so that server fires job right on time for user
    //Later add - Timezone to hours
    for(var i=0; i < LIST_OF_ARRIVALS.length; i++){
        var temp_date = new Date(
            LIST_OF_ARRIVALS[i].date_of_arrival.getFullYear(), 
            LIST_OF_ARRIVALS[i].date_of_arrival.getMonth(), 
            LIST_OF_ARRIVALS[i].date_of_arrival.getDate() - 1,
            LIST_OF_ARRIVALS[i].date_of_arrival.getHours(), 
            LIST_OF_ARRIVALS[i].date_of_arrival.getMinutes(), 
            LIST_OF_ARRIVALS[i].date_of_arrival.getSeconds()
        );

        var temp_job = schedule.scheduleJob(temp_date, async function(fireDate){
            var job_date1;
            var job_date2;

            for(var j=0; j<LIST_OF_ARRIVALS.length;j++){
                job_date1 = new Date(
                    LIST_OF_ARRIVALS[j].date_of_arrival.getFullYear(), 
                    LIST_OF_ARRIVALS[j].date_of_arrival.getMonth(), 
                    LIST_OF_ARRIVALS[j].date_of_arrival.getDate() - 1,
                    LIST_OF_ARRIVALS[j].date_of_arrival.getHours(), 
                    LIST_OF_ARRIVALS[j].date_of_arrival.getMinutes(), 
                    LIST_OF_ARRIVALS[j].date_of_arrival.getSeconds()
                );
                job_date2 = new Date(fireDate);
                
                if(job_date1.toString() === job_date2.toString()){
                    var test_date = new Date(
                        LIST_OF_ARRIVALS[j].date_of_arrival.getFullYear(), 
                        LIST_OF_ARRIVALS[j].date_of_arrival.getMonth(), 
                        LIST_OF_ARRIVALS[j].date_of_arrival.getDate() - 1,
                        LIST_OF_ARRIVALS[j].date_of_arrival.getHours()+ LIST_OF_ARRIVALS[j].timezone, 
                        LIST_OF_ARRIVALS[j].date_of_arrival.getMinutes(), 
                        LIST_OF_ARRIVALS[j].date_of_arrival.getSeconds()
                    );

                        const botId = LIST_OF_ARRIVALS[j].chatfuel_bot_id;
                        const chatfuelToken = LIST_OF_ARRIVALS[j].chatfuel_token;

                        const userId = LIST_OF_ARRIVALS[j].messenger_id;
                        const blockName = LIST_OF_ARRIVALS[j].block_name;
                        
                        const broadcastApiUrl = 'https://api.chatfuel.com/bots/' + botId + '/users/' + userId + '/send?chatfuel_token=' + chatfuelToken + '&chatfuel_block_name=' + blockName;

                        // Send a POST request to chatfue api with specific Content type
                        var postData = {
                        };


                        let axiosConfig = {
                            headers: {
                              'Content-Type': 'application/json',
                              "Access-Control-Allow-Origin": "*",
                            }
                        };

                        axios.post(broadcastApiUrl, postData, axiosConfig)
                        .then((res) => {
                          console.log("RESPONSE RECEIVED: ", res);
                        })
                        .catch((err) => {
                          console.log("AXIOS ERROR: ", err);
                        })


                    console.log(test_date);
                    console.log("REMOVING ENTRY FROM DB AND LIST OF ARRIVALS");

                    await ArrivalSchedule.remove({ _id: LIST_OF_ARRIVALS[j]._id })
                    .exec()
                    .then(result => {
                    })
                    .catch(err => {
                        console.log(err);

                    });
                    LIST_OF_ARRIVALS.splice(0, j+1);
                }
            }
        });

        ARRIVAL_SCHEDULE_JOBS.push(temp_job);
    }
}

async function getList () {
    var date = new Date(); 
    var date1 = new Date(
        date.getFullYear(), 
        date.getMonth(), 
        date.getDate() + 1,
        0, 
        0, 
        0
    );

    var date2 = new Date(
        date.getFullYear(), 
        date.getMonth(), 
        date.getDate() + 2,
        0, 
        0, 
        0
    );

    await ArrivalSchedule.find({date_of_arrival: {$gt: date1, $lt: date2}})
    .exec()
    .then(docs => {
        LIST = docs;
        LIST_OF_ARRIVALS = LIST;
        //console.log(docs);
    })
    .catch(err => {
        console.log(err);
    });

    //for loop for extracting information for schedule node
    // WE MUST CONSIDER TIMEZONES, so that server fires job right on time for user
    //Later add - Timezone to hours
    for(var i=0; i < LIST.length; i++){
        var temp_date = new Date(
            LIST[i].date_of_arrival.getFullYear(), 
            LIST[i].date_of_arrival.getMonth(), 
            LIST[i].date_of_arrival.getDate() - 1,
            LIST[i].date_of_arrival.getHours(), 
            LIST[i].date_of_arrival.getMinutes(), 
            LIST[i].date_of_arrival.getSeconds()
        );

        var temp_job = schedule.scheduleJob(temp_date, async function(fireDate){
            var job_date1;
            var job_date2;

            for(var j=0; j<LIST_OF_ARRIVALS.length;j++){
                job_date1 = new Date(
                    LIST_OF_ARRIVALS[j].date_of_arrival.getFullYear(), 
                    LIST_OF_ARRIVALS[j].date_of_arrival.getMonth(), 
                    LIST_OF_ARRIVALS[j].date_of_arrival.getDate() - 1,
                    LIST_OF_ARRIVALS[j].date_of_arrival.getHours(), 
                    LIST_OF_ARRIVALS[j].date_of_arrival.getMinutes(), 
                    LIST_OF_ARRIVALS[j].date_of_arrival.getSeconds()
                );
                job_date2 = new Date(fireDate);
                
                if(job_date1.toString() === job_date2.toString()){
                    const botId = LIST_OF_ARRIVALS[j].chatfuel_bot_id;
                    const chatfuelToken = LIST_OF_ARRIVALS[j].chatfuel_token;

                    const userId = LIST_OF_ARRIVALS[j].messenger_id;
                    const blockName = LIST_OF_ARRIVALS[j].block_name;
                        
                    const broadcastApiUrl = 'https://api.chatfuel.com/bots/' + botId + '/users/' + userId + '/send?chatfuel_token=' + chatfuelToken + '&chatfuel_block_name=' + blockName;

                    // Send a POST request to chatfue api with specific Content type
                    var postData = {
                    };


                    let axiosConfig = {
                        headers: {
                            'Content-Type': 'application/json',
                            "Access-Control-Allow-Origin": "*",
                        }
                    };

                    axios.post(broadcastApiUrl, postData, axiosConfig)
                    .then((res) => {
                        console.log("RESPONSE RECEIVED: ", res);
                    })
                    .catch((err) => {
                        console.log("AXIOS ERROR: ", err);
                    })


                    console.log("REMOVING ENTRY FROM DB AND LIST OF ARRIVALS");

                    await ArrivalSchedule.remove({ _id: LIST_OF_ARRIVALS[j]._id })
                    .exec()
                    .then(result => {
                    })
                    .catch(err => {
                        console.log(err);

                    });
                    LIST_OF_ARRIVALS.splice(0, j+1);
                }
            }
        });

        ARRIVAL_SCHEDULE_JOBS.push(temp_job);
    }
    
}


var rule1 = new schedule.RecurrenceRule();
rule1.minute = 2;

var rule2 = new schedule.RecurrenceRule();
rule2.minute = 44;



var j1 = schedule.scheduleJob(rule1, function(){
    getList();
});

var j2 = schedule.scheduleJob(rule2, function(){
    getList();
});




/*
var timerID = setInterval(function() {
    console.log('The world is going to end today.');
    initializeScheduleJobs();
}, 60 * 1000); 
*/


/*
var date = new Date(2018, 6, 18, 11, 36, 0);

var arrivalScheduleJobs = schedule.scheduleJob(date, function(){
    console.log('The world is going to end today.');
});

*/
//<-------------------------get/delete/patch specific arrival---------------------------->

router.get('/arrivalSchedules/:arrivalScheduleId', (req, res, next) => {
    const id = req.params.arrivalScheduleId;
    ArrivalSchedule.findById(id)
    .exec()
    .then(doc => {
        console.log("From database", doc);
        if(doc){
            res.status(200).json(doc);
        }else {
            res.status(404).json({
                message: "Object does not exist"
            })
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error : err});
    });
});

router.delete('/arrivalSchedules/:arrivalScheduleId', (req, res, next) => {
    const id = req.params.arrivalScheduleId;
    ArrivalSchedule.remove({ _id: id })
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error : err});
    });
});

router.patch('/arrivalSchedules/:arrivalScheduleId', (req, res, next) => {
    const id = req.params.arrivalScheduleId;
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    ArrivalSchedule.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error : err});
    });
});


//<---------------------------get/post requests for questions------------------------------->
router.get('/arrivalSchedules', (req, res, next) => {
    ArrivalSchedule.find()
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error : err});
    });
});

router.post('/arrivalSchedules', (req, res, next) => {
    const messenger_id = req.body['messenger_id'];
    const chatfuel_bot_id = req.body['chatfuel_bot_id'];
    const chatfuel_token = req.body['chatfuel_token'];
    const first_name = req.body['first_name'];
    const last_name = req.body['last_name'];
    const arrival_location =  req.body['arrival_location'];
    const date_of_arrival =  req.body['date_of_arrival'];
    const timezone = req.body['timezone'];
    const block_name = req.body['block_name'];
    const language = req.body['language'];
    
    const arrivalSchedule = new ArrivalSchedule({
        _id : new mongoose.Types.ObjectId(),
        messenger_id: messenger_id,
        chatfuel_bot_id: chatfuel_bot_id,
        chatfuel_token: chatfuel_token,
        first_name: first_name,
        last_name: last_name,
        arrival_location: arrival_location,
        date_of_arrival: date_of_arrival,
        timezone: timezone,
        block_name: block_name,
        language: language
    });
    console.log(date_of_arrival);
    arrivalSchedule.save()
    .then(result => {
        console.log(result);
        res.status(200).json({
            message: 'Post request handled!',
            result : arrivalSchedule
        });
    }).catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        })
    });
});


//<============================EXPORTS============================>

module.exports = router;
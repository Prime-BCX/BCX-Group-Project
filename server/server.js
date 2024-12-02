const express = require('express');
const cron = require('node-cron');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5001;

// Middleware Includes
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route Includes
const userRouter = require('./routes/user.router');

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('build'));

// Passport Session Configuration
app.use(sessionMiddleware);

// Start Passport Sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/user', userRouter);

cron.schedule('0 * * * *', () => {
  console.log('running hourly job for', Date.now);
  /*
select "user".id, email, first_name, step, daily_hydrate, daily_grow, daily_move, daily_focus, daily_nourish,daily_dinner
from "user" 
join userProgress on "user".id = userProgress.id 
join dailyHabits on "user".id = dailyHabits.user_id 
where 
"dayEndTime" = '2:00:00' and 
notify = true and 
challenge_complete = false
*/
})

// Listen Server & Port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

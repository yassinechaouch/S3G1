import React from 'react'
import Paper from '@material-ui/core/Paper';
import moment from 'moment';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
//import appointments from '../../../demo-data/today-appointments';

const useStyles = makeStyles(theme => ({
    todayCell: {
      backgroundColor: fade(theme.palette.primary.main, 0.1),
      '&:hover': {
        backgroundColor: fade(theme.palette.primary.main, 0.14),
      },
      '&:focus': {
        backgroundColor: fade(theme.palette.primary.main, 0.16),
      },
    },
    weekendCell: {
      backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
      '&:hover': {
        backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
      },
      '&:focus': {
        backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
      },
    },
    today: {
      backgroundColor: fade(theme.palette.primary.main, 0.16),
    },
    weekend: {
      backgroundColor: fade(theme.palette.action.disabledBackground, 0.06),
    },
  }));
  
  const TimeTableCell = (props) => {
    const classes = useStyles();
    const { startDate } = props;
    const date = new Date(startDate);
  
    if (date.getDate() === new Date().getDate()) {
      return <WeekView.TimeTableCell {...props} className={classes.todayCell} />;
    } if (date.getDay() === 0 || date.getDay() === 6) {
      return <WeekView.TimeTableCell {...props} className={classes.weekendCell} />;
    } return <WeekView.TimeTableCell {...props} />;
  };
  
  const DayScaleCell = (props) => {
    const classes = useStyles();
    const { startDate, today } = props;
  
    if (today) {
      return <WeekView.DayScaleCell {...props} className={classes.today} />;
    } if (startDate.getDay() === 0 || startDate.getDay() === 6) {
      return <WeekView.DayScaleCell {...props} className={classes.weekend} />;
    } return <WeekView.DayScaleCell {...props} />;
  };

const appointments = [
    {
      title: 'Website Re-Design Plan',
      startDate: new Date(2018, 5, 25, 9, 35),
      endDate: new Date(2018, 5, 25, 11, 30),
      id: 0,
      location: 'Room 1',
    }, {
      title: 'Book Flights to San Fran for Sales Trip',
      startDate: new Date(2018, 5, 25, 12, 11),
      endDate: new Date(2018, 5, 25, 13, 0),
      id: 1,
      location: 'Room 1',
    }, {
      title: 'Install New Router in Dev Room',
      startDate: new Date(2018, 5, 25, 14, 30),
      endDate: new Date(2018, 5, 25, 15, 35),
      id: 2,
      location: 'Room 2',
    }, {
      title: 'Approve Personal Computer Upgrade Plan',
      startDate: new Date(2018, 5, 26, 10, 0),
      endDate: new Date(2018, 5, 26, 11, 0),
      id: 3,
      location: 'Room 2',
    }, {
      title: 'Final Budget Review',
      startDate: new Date(2018, 5, 26, 12, 0),
      endDate: new Date(2018, 5, 26, 13, 35),
      id: 4,
      location: 'Room 2',
    }, {
      title: 'New Brochures',
      startDate: new Date(2018, 5, 26, 14, 30),
      endDate: new Date(2018, 5, 26, 15, 45),
      id: 5,
      location: 'Room 2',
    }, {
      title: 'Install New Database',
      startDate: new Date(2018, 5, 27, 9, 45),
      endDate: new Date(2018, 5, 27, 11, 15),
      id: 6,
      location: 'Room 1',
    }, {
      title: 'Approve New Online Marketing Strategy',
      startDate: new Date(2018, 5, 27, 12, 0),
      endDate: new Date(2018, 5, 27, 14, 0),
      id: 7,
      location: 'Room 3',
    }, {
      title: 'Upgrade Personal Computers',
      startDate: new Date(2018, 5, 27, 15, 15),
      endDate: new Date(2018, 5, 27, 16, 30),
      id: 8,
      location: 'Room 3',
    }, {
      title: 'Customer Workshop',
      startDate: new Date(2018, 5, 28, 11, 0),
      endDate: new Date(2018, 5, 28, 12, 0),
      id: 9,
      location: 'Room 3',
    }, {
      title: 'Prepare 2015 Marketing Plan',
      startDate: new Date(2018, 5, 28, 11, 0),
      endDate: new Date(2018, 5, 28, 13, 30),
      id: 10,
      location: 'Room 1',
    }, {
      title: 'Brochure Design Review',
      startDate: new Date(2018, 5, 28, 14, 0),
      endDate: new Date(2018, 5, 28, 15, 30),
      id: 11,
      location: 'Room 2',
    }, {
      title: 'Create Icons for Website',
      startDate: new Date(2018, 5, 29, 10, 0),
      endDate: new Date(2018, 5, 29, 11, 30),
      id: 12,
      location: 'Room 2',
    }, {
      title: 'Upgrade Server Hardware',
      startDate: new Date(2018, 5, 29, 14, 30),
      endDate: new Date(2018, 5, 29, 16, 0),
      id: 13,
      location: 'Room 3',
    }, {
      title: 'Submit New Website Design',
      startDate: new Date(2018, 5, 29, 16, 30),
      endDate: new Date(2018, 5, 29, 18, 0),
      id: 14,
      location: 'Room 3',
    }, {
      title: 'Launch New Website',
      startDate: new Date(2018, 5, 29, 12, 20),
      endDate: new Date(2018, 5, 29, 14, 0),
      id: 15,
      location: 'Room 2',
    }, {
      title: 'Website Re-Design Plan',
      startDate: new Date(2018, 6, 2, 9, 30),
      endDate: new Date(2018, 6, 2, 15, 30),
      id: 16,
      location: 'Room 1',
    }, {
      title: 'Book Flights to San Fran for Sales Trip',
      startDate: new Date(2018, 6, 2, 12, 0),
      endDate: new Date(2018, 6, 2, 13, 0),
      id: 17,
      location: 'Room 3',
    }, {
      title: 'Install New Router in Dev Room',
      startDate: new Date(2018, 6, 2, 14, 30),
      endDate: new Date(2018, 6, 2, 17, 30),
      id: 18,
      location: 'Room 2',
    }, {
      title: 'Approve Personal Computer Upgrade Plan',
      startDate: new Date(2018, 6, 2, 16, 0),
      endDate: new Date(2018, 6, 3, 9, 0),
      id: 19,
      location: 'Room 2',
    }, {
      title: 'Final Budget Review',
      startDate: new Date(2018, 6, 3, 10, 15),
      endDate: new Date(2018, 6, 3, 13, 35),
      id: 20,
      location: 'Room 1',
    }, {
      title: 'New Brochures',
      startDate: new Date(2018, 6, 3, 14, 30),
      endDate: new Date(2018, 6, 3, 15, 45),
      id: 21,
      location: 'Room 3',
    }, {
      title: 'Install New Database',
      startDate: new Date(2018, 6, 3, 15, 45),
      endDate: new Date(2018, 6, 4, 12, 15),
      id: 22,
      location: 'Room 3',
    }, {
      title: 'Approve New Online Marketing Strategy',
      startDate: new Date(2018, 6, 4, 12, 35),
      endDate: new Date(2018, 6, 4, 14, 15),
      id: 23,
      location: 'Room 3',
    }, {
      title: 'Upgrade Personal Computers',
      startDate: new Date(2018, 6, 4, 15, 15),
      endDate: new Date(2018, 6, 4, 20, 30),
      id: 24,
      location: 'Room 2',
    }, {
      title: 'Customer Workshop',
      startDate: new Date(2018, 6, 5, 6, 0),
      endDate: new Date(2018, 6, 5, 14, 20),
      id: 25,
      location: 'Room 1',
    }, {
      title: 'Customer Workshop',
      startDate: new Date(2018, 6, 5, 14, 35),
      endDate: new Date(2018, 6, 5, 16, 20),
      id: 26,
      location: 'Room 1',
    }, {
      title: 'Customer Workshop 2',
      startDate: new Date(2018, 6, 5, 10, 0),
      endDate: new Date(2018, 6, 5, 11, 20),
      id: 27,
      location: 'Room 2',
    }, {
      title: 'Prepare 2015 Marketing Plan',
      startDate: new Date(2018, 6, 5, 20, 0),
      endDate: new Date(2018, 6, 6, 13, 30),
      id: 28,
      location: 'Room 3',
    }, {
      title: 'Brochure Design Review',
      startDate: new Date(2018, 6, 6, 14, 10),
      endDate: new Date(2018, 6, 6, 15, 30),
      id: 29,
      location: 'Room 3',
    }, {
      title: 'Create Icons for Website',
      startDate: new Date(2018, 6, 6, 10, 0),
      endDate: new Date(2018, 6, 7, 14, 30),
      id: 30,
      location: 'Room 1',
    }, {
      title: 'Upgrade Server Hardware',
      startDate: new Date(2018, 6, 3, 9, 30),
      endDate: new Date(2018, 6, 3, 12, 25),
      id: 31,
      location: 'Room 2',
    }, {
      title: 'Submit New Website Design',
      startDate: new Date(2018, 6, 3, 12, 30),
      endDate: new Date(2018, 6, 3, 18, 0),
      id: 32,
      location: 'Room 2',
    }, {
      title: 'Launch New Website',
      startDate: new Date(2018, 6, 3, 12, 20),
      endDate: new Date(2018, 6, 3, 14, 10),
      id: 33,
      location: 'Room 2',
    }, {
      title: 'Book Flights to San Fran for Sales Trip',
      startDate: new Date(2018, 5, 26, 0, 0),
      endDate: new Date(2018, 5, 27, 0, 0),
      id: 34,
      location: 'Room 1',
    }, {
      title: 'Customer Workshop',
      startDate: new Date(2018, 5, 29, 10, 0),
      endDate: new Date(2018, 5, 30, 14, 30),
      id: 35,
      location: 'Room 1',
    }, {
      title: 'Google AdWords Strategy',
      startDate: new Date(2018, 6, 3, 0, 0),
      endDate: new Date(2018, 6, 4, 10, 30),
      id: 36,
      location: 'Room 3',
    }, {
      title: 'Rollout of New Website and Marketing Brochures',
      startDate: new Date(2018, 6, 5, 10, 0),
      endDate: new Date(2018, 6, 9, 14, 30),
      id: 37,
      location: 'Room 3',
    }, {
      title: 'Update NDA Agreement',
      startDate: new Date(2018, 6, 1, 10, 0),
      endDate: new Date(2018, 6, 3, 14, 30),
      id: 38,
      location: 'Room 2',
    }, {
      title: 'Customer Workshop',
      startDate: new Date(2018, 6, 1),
      endDate: new Date(2018, 6, 2),
      allDay: true,
      id: 39,
      location: 'Room 1',
    },
  ];
  
  
const currentDate = moment();
let date = currentDate.date();

const makeTodayAppointment = (startDate, endDate) => {
  const days = moment(startDate).diff(endDate, 'days');
  const nextStartDate = moment(startDate)
    .year(currentDate.year())
    .month(currentDate.month())
    .date(date);
  const nextEndDate = moment(endDate)
    .year(currentDate.year())
    .month(currentDate.month())
    .date(date + days);

  return {
    startDate: nextStartDate.toDate(),
    endDate: nextEndDate.toDate(),
  };
};

appointments.map(({ startDate, endDate, ...restArgs }) => {
    const result = {
      ...makeTodayAppointment(startDate, endDate),
      ...restArgs,
    };
    date += 1;
    if (date > 31) date = 1;
    return result;
  });

  
function Dashboard() {
    return (
        <Paper>
        <Scheduler
          data={appointments}
          height={660}
        >
          <ViewState />
          <WeekView
            startDayHour={9}
            endDayHour={19}
            timeTableCellComponent={TimeTableCell}
            dayScaleCellComponent={DayScaleCell}
          />
          <Appointments />
        </Scheduler>
      </Paper>
    )
}

export default Dashboard

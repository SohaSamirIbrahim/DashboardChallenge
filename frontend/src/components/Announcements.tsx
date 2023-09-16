import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import useAnnouncements from '../hooks/useAnnouncements';
import requireAuth from './requireAuth';
import { Button, Card, CardActions, CardContent } from '@mui/material';


interface Announcement {
    id: string
    Instructor: string;
    Course: string;
    AnnouncementText: string;
}

function Announcements(): any {

    const { isLoading, error, sendRequest } = useAnnouncements();

    const [announcements, setAnnouncements] = React.useState<Announcement[]>(); 

    const createTask = (taskData:Announcement[]) => {
      setAnnouncements(taskData)
      console.log(announcements)
    };
  
    const enterTaskHandler = React.useCallback( async () => {
      sendRequest(
        {
          url: '/',
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          body: undefined
        },
        createTask.bind(null)
      );
    }, []
    );
  
    const getAnnouncements = React.useEffect(()=>{
        enterTaskHandler()
    }, [enterTaskHandler])

  return (

    <React.Fragment>
        

{!isLoading && !error && <Card >
      <CardContent>
       
        <Typography variant="h5" component="div">
          Announcements
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          What to know to be up to date!
        </Typography>
        <List sx={{bgcolor: 'background.paper' }}>
        {announcements && announcements.map((announcement) => (
        <React.Fragment key={announcement.id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={announcement.Instructor} />
            </ListItemAvatar>
            <ListItemText
              primary={announcement.Instructor}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'flex' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {`to ${announcement.Course}`}
                  </Typography>
                  {` — ${announcement.AnnouncementText}`}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
            
      </CardContent>
      <Button size="small" variant="outlined">Add Announcement</Button>

      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
}    </React.Fragment>


  );
}
export default Announcements;
// export default requireAuth(Announcements);
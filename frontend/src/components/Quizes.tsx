import * as React from "react";
import useQuizes from "../hooks/useQuizes";
import requireAuth from "./requireAuth";
import {
  Button,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

interface Quiz {
  id: string;
  Title: String;
  Course: String;
  Topic: String;
  Due: String;
  Question: String;
  Choices: [String];
  CorrectAnswer: String;
}

function Quizes(): any {
  const { isLoading, error, sendRequest } = useQuizes();

  const [quizes, setQuizes] = React.useState<Quiz[]>();

  const setQuiz = (taskData: Quiz[]) => {
    setQuizes(taskData);
    console.log(quizes);
  };

  const getQuizesHandler = React.useCallback(async () => {
    sendRequest(
      {
        url: "/",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: undefined,
      },
      setQuiz.bind(null)
    );
  }, []);

  const getAnnouncements = React.useEffect(() => {
    getQuizesHandler();
  }, [getQuizesHandler]);

  return (
    <React.Fragment>
      <Card>
        {isLoading && (
          <CardContent>
            <Typography>Loading...</Typography>
          </CardContent>
        )}

        {!isLoading && !error && (
          <CardContent>
            <Typography variant="h5" component="div">
              Quizes
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              What's due!
            </Typography>
            <List
              sx={{
                bgcolor: "background.paper",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {quizes &&
                quizes.map((quiz) => (
                  <React.Fragment key={quiz.id}>
                    <ListItem alignItems="flex-start">
                      <ListItemText
                        primary={quiz.Title}
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "flex" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              {`Course: ${quiz.Course}`}
                            </Typography>
                            <Typography
                              sx={{ display: "flex" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              {`Topic: ${quiz.Topic}`}
                            </Typography>

                            {` Due To: ${quiz.Due}`}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Button size="small" variant="outlined">
                      Start Quiz
                    </Button>
                    <Divider variant="inset" component="li" />
                  </React.Fragment>
                ))}
            </List>
          </CardContent>
        )}
        {/* <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions> */}
      </Card>
    </React.Fragment>
  );
}

// export default Quizes;
export default requireAuth(Quizes);

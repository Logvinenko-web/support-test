import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function QuestionCards({questionList, handleOpenUpdateQuestion, deleteQuestionId}) {
  const [expandedId, setExpandedId] = React.useState(false);

  const handleExpandClick = (id) => {
    setExpandedId(expandedId === id ? false : id)
  };

  return (
    <div className="card-container">
    {questionList.map((question, id) => (
    <Card key={question.id} sx={{ maxWidth: 500, marginTop: '20px' }}>
      <CardContent>
      <Typography sx={{ fontSize: 14 , fontWeight: 'bold'}} color="text.secondary" gutterBottom>
        Питання:
      </Typography>
      <Typography sx={{paddingBottom: 3}} variant="h5" component="div">
        {question.content}
      </Typography>
      <Typography sx={{ fontSize: 14,  fontWeight: 'bold'}} color="text.secondary" gutterBottom>
        Правильна відповідь:
      </Typography>
      {question.variants.map((variant)=>{      
      if (variant.isCorrect){
       return <Typography key={String(variant.id)}>
        {variant.variant}
        </Typography>

}
      })}
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
          <EditIcon onClick={()=>handleOpenUpdateQuestion(question.id)}/>
        </IconButton>
        <IconButton aria-label="share">
          <DeleteForeverIcon onClick={()=>deleteQuestionId(question.id)}/>
        </IconButton>
        <ExpandMore
          onClick={()=>handleExpandClick(id)}
          aria-expanded={expandedId === id}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expandedId === id} timeout="auto" unmountOnExit>
        <CardContent>
        {question.variants.map((variant, i)=>{
           if (!variant.isCorrect){
          return <Typography key={String(variant.id)} paragraph>Варіант:{i+1} {variant.variant}</Typography>
           }
          })}
        </CardContent>
      </Collapse>
    </Card>
    ))}
    </div>
  );
}



import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const SimpleAccordion = ({ tasks }) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Документи</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {tasks.documents.map((doc) => (
            <Typography>
              {doc.name}{' '}
              <a target="_blank" href={doc.link}>
                Посилання
              </a>
            </Typography>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

import { Button, Grid } from "@mui/material";
import React from "react";
/*
export interface FileHeaderProps {
  file: File;
  onDelete: (file: File) => void;
}
*/

export function FileHeader({ file, onDelete }) {
  return (
    <Grid container justify="space-between" alignItems="center">
      <Grid item>{file.name}</Grid>
      <Grid item>
        <Button size="small" onClick={() => onDelete(file)}>
          Delete
        </Button>
      </Grid>
    </Grid>
  );
}

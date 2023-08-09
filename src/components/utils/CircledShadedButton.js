import { IconButton, Zoom, Tooltip, Avatar, useTheme} from '@mui/material';

const CircledShadedButton = ({icon, value, link=false, margin=4, clickFunction}) => {
    const theme = useTheme();

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
      <Tooltip
        title={capitalizeFirstLetter(value)}
        placement="right"
        TransitionComponent={Zoom}
      >
        <Avatar 
          sx={{
            m: margin,
            boxShadow: `1px 2px 4px ${theme.palette.foreground.default}`,
            backgroundColor: theme.palette.background.default}}>
              {link ? 
                <IconButton
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                {icon}
              </IconButton>
              :
                <IconButton
                //   onClick={() => value==='sources' ? showSources() : setWidgetMode(value)}
                    onClick={clickFunction}
                >
                  {icon}
                </IconButton>
            }
        </Avatar>
      </Tooltip>
    )
}

export default CircledShadedButton;
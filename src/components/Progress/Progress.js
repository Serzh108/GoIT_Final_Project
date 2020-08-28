// import React from 'react';
// import PropTypes from 'prop-types';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

// function CircularProgressWithLabel(props) {
//   return (
//     <Box position="relative" display="inline-flex">
//       <CircularProgress variant="static" {...props} />
//       <Box
//         top={0}
//         left={0}
//         bottom={0}
//         right={0}
//         position="absolute"
//         display="flex"
//         alignItems="center"
//         justifyContent="center"
//       >
//         <Typography
//           variant="caption"
//           component="div"
//           color="#255 255 255"
//         >{`${Math.round(props.value)}%`}</Typography>
//       </Box>
//     </Box>
//   );
// }

// CircularProgressWithLabel.propTypes = {
//   /**
//    * The value of the progress indicator for the determinate and static variants.
//    * Value between 0 and 100.
//    */
//   value: PropTypes.number.isRequired,
// };

// export default function CircularStatic({props1}) {
//   const [progress, setProgress] = React.useState(0);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress(prevProgress =>
//         prevProgress + {props1},
//       );
//     }, 800);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return <CircularProgressWithLabel value={progress} />;
// }

// import React from 'react';
// import style from './progress.module.css';

// function Progress() {
//   return (
//     <>
//       <div className={style.progressPercentsGreen}>100</div>
//       <div className={style.progressPercentsRed}>100</div>
//     </>
//   );
// }

// export default Progress;

import { Avatar, Stack, Typography,Grid } from "@mui/material";
import { Box, Container, } from "@mui/system";
import kevin from '../assets/kevin.jpeg'
const AboutMember = () => {
    return ( 
       <Container>
        <Stack direction="row" spacing={3}>
            <Grid sx={{display:'flex',justifyContent:'space-between'}}>
            <Box>
                <Avatar sx={{width:200,height:200}} alt="kevin" src={kevin} />
                <Typography sx={{justifyContent:'center',display:'flex'}}>Kevin Usmayadhy W.</Typography>
            </Box>
            <Box>
                <Avatar sx={{width:200,height:200}} alt="kevin" src={kevin} />
                <Typography sx={{justifyContent:'center',display:'flex'}}>Kevin Usmayadhy W.</Typography>
            </Box>
            <Box>
                <Avatar sx={{width:200,height:200}} alt="kevin" src={kevin} />
                <Typography sx={{justifyContent:'center',display:'flex'}}>Kevin Usmayadhy W.</Typography>
            </Box>
            <Box>
                <Avatar sx={{width:200,height:200}} alt="kevin" src={kevin} />
                <Typography sx={{justifyContent:'center',display:'flex'}}>Kevin Usmayadhy W.</Typography>
            </Box>
            <Box>
                <Avatar sx={{width:200,height:200}} alt="kevin" src={kevin} />
                <Typography sx={{justifyContent:'center',display:'flex'}}>Kevin Usmayadhy W.</Typography>
            </Box>
            
            </Grid>
       </Stack> 
       </Container>
     );
}
 
export default AboutMember;
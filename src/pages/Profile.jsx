import { useSelector } from 'react-redux';

const Profile = () => {
    const {currentUser} = useSelector((state)=> state.user)
    return (
        <div>
        </div>
    );
};

export default Profile;
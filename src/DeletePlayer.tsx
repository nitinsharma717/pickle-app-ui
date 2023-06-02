import axios from 'axios';

function DeletePlayer({ playerId }) {
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/players/${playerId}`);
      console.log('Player deleted successfully');
      // Perform any necessary cleanup or notify the parent component
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleDelete}>
      Delete Player
    </button>
  );
}

export default DeletePlayer;

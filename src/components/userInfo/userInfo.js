import React from 'react';
import axios from 'axios';
import styles from './userInfo.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserInfo = ({ userName, onLogout }) => {
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token not found');
      }

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      // Debugging token
      console.log('Token:', token);
      // console
      // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY2OGY3Y2ExNDVjYjdkNzE5YjRhYTBkMiIsInBhc3N3b3JkIjoiJDJiJDEwJEtFVGtEbjVTNG5KQ3phWjJEeFJ4anUxL0ZBSjBVTlViQnU4OUh3L0VMT05Ya1ZVQnNNUmhXIiwiZW1haWwiOiJ0enV0enV0aGVraWRAZ21haWwuY29tIiwic3Vic2NyaXB0aW9uIjoic3RhcnRlciIsInRva2VuIjpudWxsLCJhdmF0YXJVUkwiOiIvL3d3dy5ncmF2YXRhci5jb20vYXZhdGFyLzE3NGViYTExOWI5OGE1MzljOTBjNWVhNzgxZGViMDU0IiwidmVyaWZ5Ijp0cnVlLCJ2ZXJpZmljYXRpb25Ub2tlbiI6IjU1NGJmNmYyLWZkYWQtNDlhNC1hOWFhLWNmMzc0ZjJhZmUyYSIsIl9fdiI6MH0sImlhdCI6MTcyMDY4MDA1OSwiZXhwIjoxNzIwNjgzNjU5fQ.EdQg8Kg-T7xnJHPFofe3gCgNVuFTG8PLeOdeIa9famY

      // bd
      // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY2OGY3ZmE4NDVjYjdkNzE5YjRhYTBmNyIsInBhc3N3b3JkIjoiJDJiJDEwJEJmdGVuODVGOUlFQldETWN6TGVmdmVaY3hUbWcudjg3OWZzT1F3Uk5wS1lqUGNXQzlCeUFtIiwiZW1haWwiOiJ0enV0enV0aGVraWRAZ21haWwuY29tIiwic3Vic2NyaXB0aW9uIjoic3RhcnRlciIsInRva2VuIjpudWxsLCJhdmF0YXJVUkwiOiIvL3d3dy5ncmF2YXRhci5jb20vYXZhdGFyLzE3NGViYTExOWI5OGE1MzljOTBjNWVhNzgxZGViMDU0IiwidmVyaWZ5Ijp0cnVlLCJ2ZXJpZmljYXRpb25Ub2tlbiI6ImNjZTA1MWYzLTEyZjEtNGI3Zi04NmE2LTA0MTRhOTY3ZTAzMiIsIl9fdiI6MH0sImlhdCI6MTcyMDY4MDM5MiwiZXhwIjoxNzIwNjgzOTkyfQ.pWKSoWDMDgCzaHplo-6xCy5nNee98Q-9N8sLWSKpEHM

      const response = await axios.get(
        'http://localhost:3001/api/users/logout',
        config
      );
      if (response.status === 204) {
        localStorage.removeItem('token');
        onLogout();
        toast.success('You have been logged out successfully.');
      } else {
        throw new Error('Logout failed');
      }
    } catch (error) {
      console.error('Error logging out:', error);
      toast.error('Logout failed. Please try again.');
    }
  };

  return (
    <div className={styles.userInfo}>
      <span className={styles.userName}>
        {userName}
        <span className={styles.vector}></span>
      </span>
      <button className={styles.exitButton} onClick={handleLogout}>
        Exit
      </button>
    </div>
  );
};

export default UserInfo;

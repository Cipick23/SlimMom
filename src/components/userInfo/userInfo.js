import React from 'react';
import axios from 'axios';
import styles from './userInfo.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserInfo = ({ userName, onLogout }) => {
  console.log('UserInfo - userName:', userName);
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      console.log('token:', token); // Asigură-te că token-ul este corect

      if (!token) {
        throw new Error('Token not found');
      }

      // db
      // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InBhc3N3b3JkIjoiJDJiJDEwJGNUZ2diaWYzSDNSLnhTcEk5T3U4Vi5hYmlRMUJGSmVrYmRFVm0uR1ZGYnRkbHBmYjNkYTlxIiwiZW1haWwiOiJ0enV0enV0aGVraWRAZ21haWwuY29tIiwic3Vic2NyaXB0aW9uIjoic3RhcnRlciIsInRva2VuIjpudWxsLCJhdmF0YXJVUkwiOiIvL3d3dy5ncmF2YXRhci5jb20vYXZhdGFyLzE3NGViYTExOWI5OGE1MzljOTBjNWVhNzgxZGViMDU0IiwidmVyaWZ5IjpmYWxzZSwidmVyaWZpY2F0aW9uVG9rZW4iOiJjNzNmZWNkMi1lZmZhLTQwNzMtYjAwZC1hZTBiNWI4N2YwY2MiLCJfaWQiOiI2NjhmZmFjYjA0MGZmYjQ3NTEwZGMwNmIiLCJfX3YiOjB9LCJpYXQiOjE3MjA3MTE4ODMsImV4cCI6MTcyMDcxNTQ4M30.VFXCI1szcAcvO6C2BMQFJPtHQVTpKAT_gegLZolbseQ

      // login page
      // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InBhc3N3b3JkIjoiJDJiJDEwJGNUZ2diaWYzSDNSLnhTcEk5T3U4Vi5hYmlRMUJGSmVrYmRFVm0uR1ZGYnRkbHBmYjNkYTlxIiwiZW1haWwiOiJ0enV0enV0aGVraWRAZ21haWwuY29tIiwic3Vic2NyaXB0aW9uIjoic3RhcnRlciIsInRva2VuIjpudWxsLCJhdmF0YXJVUkwiOiIvL3d3dy5ncmF2YXRhci5jb20vYXZhdGFyLzE3NGViYTExOWI5OGE1MzljOTBjNWVhNzgxZGViMDU0IiwidmVyaWZ5IjpmYWxzZSwidmVyaWZpY2F0aW9uVG9rZW4iOiJjNzNmZWNkMi1lZmZhLTQwNzMtYjAwZC1hZTBiNWI4N2YwY2MiLCJfaWQiOiI2NjhmZmFjYjA0MGZmYjQ3NTEwZGMwNmIiLCJfX3YiOjB9LCJpYXQiOjE3MjA3MTE4ODMsImV4cCI6MTcyMDcxNTQ4M30.VFXCI1szcAcvO6C2BMQFJPtHQVTpKAT_gegLZolbseQ
      // local storage token
      // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InBhc3N3b3JkIjoiJDJiJDEwJGNUZ2diaWYzSDNSLnhTcEk5T3U4Vi5hYmlRMUJGSmVrYmRFVm0uR1ZGYnRkbHBmYjNkYTlxIiwiZW1haWwiOiJ0enV0enV0aGVraWRAZ21haWwuY29tIiwic3Vic2NyaXB0aW9uIjoic3RhcnRlciIsInRva2VuIjpudWxsLCJhdmF0YXJVUkwiOiIvL3d3dy5ncmF2YXRhci5jb20vYXZhdGFyLzE3NGViYTExOWI5OGE1MzljOTBjNWVhNzgxZGViMDU0IiwidmVyaWZ5IjpmYWxzZSwidmVyaWZpY2F0aW9uVG9rZW4iOiJjNzNmZWNkMi1lZmZhLTQwNzMtYjAwZC1hZTBiNWI4N2YwY2MiLCJfaWQiOiI2NjhmZmFjYjA0MGZmYjQ3NTEwZGMwNmIiLCJfX3YiOjB9LCJpYXQiOjE3MjA3MTE4ODMsImV4cCI6MTcyMDcxNTQ4M30.VFXCI1szcAcvO6C2BMQFJPtHQVTpKAT_gegLZolbseQ
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      console.log('token:', token);

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

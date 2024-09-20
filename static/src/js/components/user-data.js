import React, { useEffect, useState } from 'react';


export default function UserData({
    data,
    setData
}) {
    const [user, setUserData] = useState({
        username: ''
    });

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await fetch('/r/name');
            const result = await response.json();
            setData({
                ...data,
                username: result.username,
                isLoading: false
            });
            setUserData({
                ...user,
                username: result.username
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    function handleUserNameChange(e) {
        setUserData({
            ...user,
            username: e.target.value
        });
    }

    async function handleFormSubmit() {
        setData({
            ...data,
            isLoading: true
        });
        try {
            await fetch('/r/name', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: user.username
                })
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setData({
                ...data,
                username: user.username,
                isLoading: false
            });
        }
    }

    async function handleClearName() {
        setData({
            ...data,
            isLoading: true
        });
        try {
            await fetch('/r/name', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: ''
                })
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setData({
                ...data,
                username: '',
                isLoading: false
            });
            setUserData({
                ...user,
                username: ''
            });
        }
    }

    return (
        <div>
            {data.username && 
                <div className="block">
                    <p>Ну привіт {data.username}</p>
                    <button 
                        type="button" 
                        className="button" 
                        onClick={handleClearName}
                    >
                        Очистити
                    </button>
                </div>
            }
            {!data.username && 
                <div className="block">
                    <p>Давай почнемо з традиційного - твої особисті дані, які ми плануємо продати рекламодавцям.</p>
                    <div className="field">
                        <label className="label" htmlFor="user_name">Як там тебе кажеш звуть?</label>
                        <div className="control">
                            <input 
                                className="input" 
                                id="user_name" 
                                name="user_name" 
                                type="text" 
                                minLength="3" 
                                maxLength="50" 
                                pattern="[a-zA-Z]+" 
                                value={user.username} 
                                onChange={handleUserNameChange} 
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button 
                                className="button" 
                                id="user_name_submit" 
                                type="button" 
                                onClick={handleFormSubmit}
                            >
                                Без проблем!
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
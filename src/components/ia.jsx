
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ImageIa() {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const apiKey = 'xK2iLSTkycvGqy7qOONh7y0D1N29pXKMp7fxkugqFvrmDNVfalT9I8JJ';
      const url = 'https://api.pexels.com/v1/search?query=nature&per_page=10';

      const response = await axios.get(url, {
        headers: {
          Authorization: apiKey,
        },
      });

      setImages(response.data.photos);
    } catch (error) {
      console.error('Erro ao buscar as imagens:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchImages}>Buscar Imagens</button>

      <div>
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src.medium}
            alt={image.photographer}
            style={{ width: '200px', height: 'auto', margin: '5px' }}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageIa;
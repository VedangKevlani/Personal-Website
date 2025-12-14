// components/LinkedInVideoLightbox.jsx
import { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './LinkedInVideoLightbox.css';

const videos = [
  {
    title: 'Neural Hands: ASL to English Translation using Deep Learning',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7386537763203948544/?originTrackingId=IkfcLRrXT3OlfPd8gIdgXw%3D%3D',
    thumbnail: '/neuralHands.jpg',
  },
  {
    title: 'Yaad: AI Price Intelligence for Real Estate',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7328884745042300928/?originTrackingId=PNgav0CtR%2BKqhu0Q%2FcdtiA%3D%3D',
    thumbnail: '/yaad.jpg',
  },
  {
    title: 'Hopefield School: A CMS supporting Jamaican Education',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7402081312725159936/?originTrackingId=TYiNVtw4SmGWqjTlCI11yw%3D%3D',
    thumbnail: '/hopefield.jpg',
  },
  {
    title: 'Taino Heritage Site: Web Experience for Cultural Preservation',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7374209400091070467/?originTrackingId=vSx9KBB3TRaMlZA%2FcJCfog%3D%3D',
    thumbnail: '/taino.jpg',
  },
  {
    title: 'Finny: Budgeting and Financial Literacy App',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7277796671449665538/?originTrackingId=vSMgLpiIT5iEVUkiwXNLjA%3D%3D',
    thumbnail: '/finny.jpg',
  }
];

export default function LinkedInVideoLightbox() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="linkedin-video-gallery">
      {videos.map((vid, index) => (
        <div key={index} className="video-card">
          <div
            className="video-poster"
            style={{ backgroundImage: `url(${vid.thumbnail})` }}
            onClick={() => setOpenIndex(index)}
          >
            <span className="play-button">▶</span>
          </div>
          <h3>{vid.title}</h3>

          <Modal
            open={openIndex === index}
            onClose={() => setOpenIndex(null)}
            center
            classNames={{ modal: 'linkedin-modal' }}
            closeIcon
          >
            <div className="video-wrapper">
              <iframe
                src={`${vid.link}?autoplay=1`}
                width="560"
                height="315"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={vid.title}
              ></iframe>
            </div>
          </Modal>
        </div>
      ))}
    </div>
  );
}

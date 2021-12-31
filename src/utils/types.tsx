export interface CardLaunchProps {
    data: {
        name: string;
        date: string;
        image: string;
        company: string;
        pad: string;
        rocketName: string;
        missionName: string;
        description: string;
        missionType: string;
        locationName: string;
    }
};

export interface CardArtigoProps {
    data: {
        title: string;
        link: string;
        image: string;
        time: string;
    }
};

export interface CardPodCastProps {
    data: {
        title: string;
        image_url: string;
        published_at: string;
        duration: string;
        playback_url: string;
    }
};

export interface CardVideoProps {
    title: string;
    idVideo: string;
};

export interface CardNewsProps {
    data: {
        title: string;
        link: string;
    }
};
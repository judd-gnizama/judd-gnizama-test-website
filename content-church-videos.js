const playlist = [];

const CCF_Romans = [
    {
        season:             1,
        episode:            1,
        title:              "Good News, Bad News: Share the Good News",
        speaker:            "Peter Tan-Chi",
        date:               "Jun 19, 2022",
        link:               "https://www.youtube.com/embed/5K3TJH0rEqs"
    },
    {
        season:             1,
        episode:            2,
        title:              "BAD NEWS: Deny or Do Something About It",
        speaker:            "Peter Tan-Chi",
        date:               "Jun 26, 2022",
        link:               "https://www.youtube.com/embed/o9TERcmXORU"
    },
    {
        season:             1,
        episode:            3,
        title:              "Guilty or Not Guilty?",
        speaker:            "Ricky Sarthou",
        date:               "Jul 3, 2022",
        link:               "https://www.youtube.com/embed/UncJfUKjgCo"
    },
    {
        season:             2,
        episode:            1,
        title:              "The Best News",
        speaker:            "Peter Tan-Chi",
        date:               "Jul 10, 2022",
        link:               "https://www.youtube.com/embed/IPVnNDvsQhg"
    },
    {
        season:             2,
        episode:            2,
        title:              "God Is A Promise Keeper",
        speaker:            "Marty Ocaya",
        date:               "Jul 17, 2022",
        link:               "https://www.youtube.com/embed/Z4_L-Bh7b7g"
    },
    {
        season:             2,
        episode:            3,
        title:              "What’s The Best Blessing",
        speaker:            "Peter Tan-Chi",
        date:               "Jul 24, 2022",
        link:               "https://www.youtube.com/embed/8s14LKsRuaQ"
    },
    {
        season:             2,
        episode:            4,
        title:              "The Best Solution Jesus, the One!",
        speaker:            "Ricky Sarthou",
        date:               "July 31, 2022",
        link:               "https://www.youtube.com/embed/gevMc6S03Es"
    },
    {
        season:             3,
        episode:            1,
        title:              "Winning The War Within",
        speaker:            "Peter Tan-Chi",
        date:               "August 7, 2022",
        link:               "https://www.youtube.com/embed/6afLCHLzuuE"
    },
    {
        season:             3,
        episode:            2,
        title:              "True Freedom Know Your New Master",
        speaker:            "Ricky Sarthou",
        date:               "August 14, 2022",
        link:               "https://www.youtube.com/embed/s3kgWHPkynI"
    },
    {
        season:             3,
        episode:            3,
        title:              "The Battle Within",
        speaker:            "Peter Tan-Chi Jr",
        date:               "August 21, 2022",
        link:               "https://www.youtube.com/embed/BUB7kC2DS28"
    },
    {
        season:             3,
        episode:            4,
        title:              "The Power to Win It’s Not Me But Christ In Me",
        speaker:            "Paul Tan-Chi",
        date:               "September 4, 2022",
        link:               "https://www.youtube.com/embed/CpQLVADiMw4"
    },
    {
        season:             3,
        episode:            5,
        title:              "Looking Forward To Glory",
        speaker:            "Edric Mendoza",
        date:               "September 11, 2022",
        link:               "https://www.youtube.com/embed/TL1-VgUWcLM"
    },
    {
        season:             3,
        episode:            6,
        title:              "God Is For Us",
        speaker:            "Peter Tan-Chi",
        date:               "September 18, 2022",
        link:               "https://www.youtube.com/embed/Tz1lNSgPV6o"
    },
    {
        season:             4,
        episode:            1,
        title:              "Take Comfort, God is in Control",
        speaker:            "Peter Tan-Chi",
        date:               "September 25, 2022",
        link:               "https://www.youtube.com/embed/x07MbcUlN_M"
    },
    {
        season:             4,
        episode:            2,
        title:              "Believe and Be Saved!",
        speaker:            "Ricky Sarthou",
        date:               "October 2, 2022",
        link:               "https://www.youtube.com/embed/6IO9PzUCpcU"
    },
    {
        season:             4,
        episode:            3,
        title:              "Be Grateful for God's Sovereign Grace",
        speaker:            "Peter Tan-Chi",
        date:               "October 9, 2022",
        link:               "https://www.youtube.com/embed/DR5tiQ8vhKc"
    },
]

// Add individual Playlists into one
playlist.push(CCF_Romans);

//Selectors
const playlists_container = document.querySelector('#playlists-container');
const video_iframe = document.querySelector('#video-iframe');
const video_title = document.querySelector('#video-title');
const video_date = document.querySelector('#video-date');
const video_speaker = document.querySelector('#video-speaker');

// Iterate through each playlist
playlist.forEach((series,index) => {
    // Create elements
    const series_div = document.createElement('div');
    const series_title = document.createElement('h3');

    series_title.innerHTML = "CCF Series: Book of Romans";
    series_div.setAttribute('id','series-buttons');

    playlists_container.appendChild(series_title);
    
    series.forEach((video,index) => {
        const button = document.createElement('button');
        button.innerHTML = `<strong>S${video.season} E${video.episode}</strong>`;
        series_div.appendChild(button);
        button.addEventListener('click',changeVid);
    })
    
    playlists_container.appendChild(series_div);
});



function changeVid(event) {
   var regex = /S(\d+)\sE(\d+)/;
   var match = regex.exec(event.target.innerHTML);
   var season = match[1];
   var episode = match[2];
   var index = CCF_Romans.findIndex(function(element) {
    return element.season == season && element.episode == episode;
   });
   video_iframe.setAttribute('src',CCF_Romans[index].link);
   video_title.innerHTML = CCF_Romans[index].title;
   video_date.innerHTML = CCF_Romans[index].date;
   video_speaker.innerHTML = CCF_Romans[index].speaker;

}

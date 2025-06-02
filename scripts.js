function OpenCVReady()
{
    console.log("OpenCV function ready");
    cv["onRuntimeInitialized"]=()=>{
        console.log("OpenCV is ready");

        let imgMain = cv.imread("img-main");
        cv.imshow("main-canvas", imgMain);


        document.getElementById("btn-main").addEventListener("click", function(){
            cv.imshow("main-canvas", imgMain);
        })

        document.getElementById("btn-blur").addEventListener("click", function(){
            //Blurred
            let imgBlur = imgMain.clone();
            let kernel = new cv.Size(19,19);
            let anchor = new cv.Point(-1,-1);
            cv.GaussianBlur(imgMain, imgBlur, kernel, 0, 0, cv.BORDER_DEFAULT);
            cv.imshow("main-canvas", imgBlur);
            imgBlur.delete();
        })
        document.getElementById("btn-grey").addEventListener("click", function(){
            //Greyscale
            let imgGrey = imgMain.clone();
            cv.cvtColor(imgMain, imgGrey, cv.COLOR_BGR2GRAY,0);
            cv.imshow("main-canvas", imgGrey);
            imgGrey.delete();
        })
        document.getElementById("btn-canny").addEventListener("click", function(){
            //Canny
            let imgCanny = imgMain.clone();
            cv.Canny(imgMain, imgCanny, 180, 100, 3, true);
            cv.imshow("main-canvas", imgCanny);
            imgCanny.delete();
        })
        document.getElementById("btn-threshold").addEventListener("click", function(){
            //Threshold
            let imgThreshold = imgMain.clone();
            cv.threshold(imgMain, imgThreshold, 127, 255, cv.THRESH_BINARY);
            cv.imshow("main-canvas", imgThreshold);
            imgThreshold.delete();
        })
        document.getElementById("btn-dilate").addEventListener("click", function(){
            //Dilate
            let imgDilate = imgMain.clone();
            let element = cv.getStructuringElement(cv.MORPH_RECT, new cv.Size(4,4));
            cv.dilate(imgMain, imgDilate, element);
            cv.imshow("main-canvas", imgDilate);
            imgDilate.delete();
        })
        document.getElementById("btn-erode").addEventListener("click", function(){
            //Erode
            let imgErode = imgMain.clone();
            let element2 = cv.getStructuringElement(cv.MORPH_RECT, new cv.Size(6,6));
            cv.erode(imgMain, imgErode, element2);
            cv.imshow("main-canvas", imgErode);
            imgErode.delete();
        })



        
    };
    
}
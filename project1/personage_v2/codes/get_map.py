import folium
import base64
import os, sys, subprocess



def mapper(today, event, content, loc, img_file):
    
    tip = "who born here?"
    img = base64.b64encode(open(f"/Users/jaeha/Desktop/personage_v2/images/{img_file}","rb").read()).decode()
    html = f"   Hello Alchemist🤓<br><br> 🗓 : {today}<br><br> What's Going ON?🧐 : {event}<br><br> 📜Let's Research📜 :<br> {content}<br><img src='data:image/png;base64,{img}'>"


    worldmap = folium.Map(
        location=loc, 
        zoom_start=10
        )


    i_frame = folium.IFrame(html)
    popup = folium.Popup(
        i_frame, 
        min_width=700, 
        max_width=700
        )


    folium.Marker(
        location=loc,
        popup=popup,
        icon=folium.Icon(color="green"),
        tooltip=tip
    ).add_to(worldmap)


    # worldmap <- 주석풀면 실행, 쉘에선 어차피 볼 수 없기 때문에 주석처리(주피터에선 볼 수 있음.)

    worldmap.save("/Users/jaeha/Desktop/personage_v2/datas/worldmap.html")


    def open_file(filename):

        if sys.platform == "win32":

            os.startfile(filename)

        else:

            opener = "open" if sys.platform == "darwin" else "xdg-open"

            subprocess.call([opener, filename])


    open_file("/Users/jaeha/Desktop/personage_v2/datas/worldmap.html")

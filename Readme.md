# Chalk, an ultra low profile split keyboard 
![preview](./imgs/IMG_5312.jpeg)
![preview transparent](./imgs/IMG_5293.jpeg)

### Features
- Ultra low profile, 6mm thickness
- Zmk + Zmk Studio support
- Big 250mah Battery per split
- Hand solderable
- 42 key layout
- extremely light and portable



### Disclaimer (s)

- Even though this can be hand soldered, this is an advanced project, if you have never built a keyboard I would advise against this being your first project
- You will need a good soldering iron and well flowing solder, but please use lead free. Flux helps with the soldering process, so be sure to have it on hand. I was able to manage soldering without, so it is possible to manage without.
- Make sure to work in a well ventilated area and wash your hands afterwards.
- These switches are super unforgiving. You will most likely not be able to desolder these once attached. Take you time and be aware that one simple mistake could ruin the whole board
- Out of the box these switchs sound horrendous, you will need to do some mods. [Mikeholscher](https://github.com/mikeholscher/zmk-config-mikefive/tree/main/files/mods) has some guides . I am still experimenting.
- The battery is quite a tight fit. Some varients might not fit perfectly, others will. Mathematically it should, but small deviations in size might affect the fit.


## Ordering guide for the PCB
- Find the files in the /gerber folder,create a zip file and upload it to you PCB manufacturer of choice.
- Specs:
    - 1mm thickness ( the case is designed for a 1mm thick PCB ) 
    - lead free HASL ( not required but recommended )
    - Pick a nice solder mask color. There is no space for a frontplate, so the solder mask will be visible.


## Build guide

### Bom
- 1x PCB (find the files in /gerbers)
- 2x XIAO nrf52840
- 2x [250Mah Battery](https://www.amazon.de/dp/B0CRQCCT6C)
- 42x 1N4148W SMD Diodes
- 42x PG1316s switches (buy at least 50, to have some spares)
- 42x PG1316s keycaps 
- 2x [Reset switch](https://42keebs.eu/shop/parts/components/reset-switch/?attribute_type=Through-hole%202-pin%206x3&attribute_pa_colour=black)
- 2x [Power switch](https://42keebs.eu/shop/parts/components/power-switch/)
- 8x [M2 3mm depth x 3.5 mm theaded inserts](https://www.amazon.de/dp/B0D9YK4PY1)
- 8x [M3 3mm flat head screws](https://www.amazon.de/dp/B0D4557749)
- 1x Left top part of the case
- 1x Right top part of the case
- 1x Left bottom part of the case
- 1x Right bottom part of the case
- 2x Reset switch cover

### Build guide

#### Printing guide for the case.
- Use a 0.2 nozzle. This is necessary to get enough detail.
- Print everything with the highest quality settings. 
- Print the top part of the case with the top of the case facing down ( therfore Y-axis rotated by 180 degrees ), this improves the finish of the case.

### Printing & using the custom keycaps
1. Find the keycap step files in the /3dfiles folder. You can either select the keycap with 1mm or 0.5mm room for foam. The 1mm version will be quieter, while the 0.5mm preservers the 6mm overall thickness of the board.
    -  [0.5mm poron foam](https://amzn.eu/d/any7tR6)
    -  [1mm eva foam](https://amzn.eu/d/0Njnhbg)
2. Import into your slicer of choice
3. Select the highest resolution printing settings
4. Orient the keycaps top side down
5. Scale keycap to: {x: 16.5mm y: 16.55mm}, though this might vary depending on printer and filament. I would recommend printing a grid of keycaps with differnt sclaing combinations as a first fit test.
    - **make sure no to scale uniformly**
6. Print in small batches for higher consistency, I printed max 9 at a time. Printing all at once will lead to dimensions all over the place and havint to scrap the whole batch.
7. Cut out a tiny piece of eva or poron foam (1mm or 0.5mm tickness depending on the keycap you selected ) and insert it into the keycap. Exact dimension for the foam are {x: 13.9 y: 11.1}
8. Carefully set the keycap on the switch and press down slightly, making sure not to loose the foam.

 
#### Credits
- base for this keycap is the convexfoam model by mikeholsher
-  I added supports / standoffs for the switch legs to rest on in the edges and decreased the overall height of the keycap to 3mm.



#### Buidling steps

##### Disclaimer
Most images in this guide were taken with an earlier version of the PCB, but the steps still apply. So don't worry if yours looks different. 

1. To solder the diodes, first put a blob of solder on one of the pads. ![pcb](./imgs/IMG_5256.jpeg)
2. Sort the diodes by direction. **This is very important**. Make sure the line on the diode on one side of them is lining up with the line on the PCB, where the diodes should go . ![diodes](./imgs/IMG_5257.jpeg)
3. Pick up a dioded with your tweezers and while reheating the blob of solder on the PCB, place the diode ( while presevering the correct direction) on the pad. Once you have attached all the diodes on one side, you can add solder to the other pad.    ![diode soldering](./imgs/IMG_5256.jpeg)
4. Once you have all diodes attached, touch up all the solder joints by reheating and removing excess solder. **This is very important, because the room underneath the switch is quite limited and too much solder on the diode pads will prevent the switch from being inserted properly.** ![diode soldered](./imgs/IMG_5260.jpeg)
5. Now we will attach the controller. The controller should come with a pair of headers. These can be very handy to fix the controller in place while soldering. Place the controller on top of the PCB then place the package on a breadboard and then stick the headers through the pads, this keeps the controller in place while soldering.  ![controller](./imgs/IMG_5262.jpeg)
6. To solder the controller, only attach solder on the side of the controller. Turn down your soldering iron's temperature to 330C max. You do not want to fry the controller. Do not try so solder where the headers are. Once a few solder joints have been made, you can carefully pull out the headers with a pair or tweezers. Now touch up all the solder joints and make sure that there are no cold joints.  ![controller solder](./imgs/IMG_5263.jpeg) ![controller solder side profile](./imgs/IMG_5264.jpeg)
7. Now turn the PCB around and drop solder into the cutouts on the back of the pcb ( the cutouts for the controller ). These joint are necessary for the battery connection and the reset switch. ![back](./imgs/IMG_5265.jpeg) ![back soldered](./imgs/IMG_5266.jpeg)
8. Now to the hard part, the switches. Please be very careful here and take you time. Check everything twice before soldering. Place a column of switches on the front of the pcb. Make sure that all switches fall into the holes. If they are not placed correclty **do not solder**. Fix the alignment first. Once all switches in the column are in place, take a piece of tape and temporarely fix them in place. Now turn the board around and drop solder into the through holes on the back for the column you are soldering. It is really important that the solder flows well. Use a very well flowing solder and make sure it had time to flow fully. I used this [solder](https://www.amazon.de/gp/product/B0CG182RLW) and had my soldering iron at 400C. After you have filled all through holes for the column, test all connections with a multimeter. If the multimeter does not show continuity at this point, **you have to reflow the solder, until it shows continuity!** Now repeat that for all columns of the board.  ![columns](./imgs/IMG_5269.jpeg)
9. Once all the switches are attached from the back, you can now solder the front pads. **It is very important to only add a very tiny amount of solder to the pads, otherwise it will block the switches.  Less is more!!! This is very important.** I have only attached two of the four pads that should be enough and reduces the risk of one of the pad's solder blocking the switch. ![front soldered](./imgs/IMG_5271.jpeg)
10. Now attach the reset switch. Place the legs through the through holes. Then add solder to the top of the through holes. Afterwards, make sure to cut the legs flush on the backside, otherwise they will interfere with the backplate. ![reset switch](./imgs/IMG_5270.jpeg)
11. Now attach the power switch. Make sure not to use too much solder. The fit between case and reset switch is quite tight. To solder the power switch, first put the power switch into its holes on the pcb. Hold it in place with a tweezer and add a bit of solder to one of the pads. Then add solder to all of the other pads.  ![power switch](./imgs/IMG_5273.jpeg)
12. Now we will attach the battery. Make sure the battery cables are cut to lenght. There should not be too much slack, since that would use up too much space in the case. **Before soldering, please check the polarity on the battery.** Take the insulation of the ends of the cables and place them through the holes for the battery , then solder them in place. Turn the PCB around and cut of the excess of the cables. ![](./imgs/IMG_5274.jpeg)
13. Repeat all the steps for the other half of the keyboard, by taking another PCB and flipping it around. Solder all components on this side, otherwise you end up with 2 left sides.
14. To attach the threaded inserts, take the top part of the case and place the threaded inserts in the preprinted holes. Use a big attachment for your soldering iron and set its temperature to 400C. Now slowly heat of the threaded insert until it sits flush with the case. Make sure that the threaded inserts are level and did not twist or are not straight. ![theaded inserts](./imgs/IMG_5277.jpeg) ![threade inserts sunken](./imgs/IMG_5278.jpeg)
15. After the previous step, place the top case on top of the pcb, turn it around and attach the bottom part of the case with the M2 screws.  ![backplate](./imgs/IMG_5305.jpeg)
16. Now insert the rubber pads in the preprinted holes. 
17. Repeat the case assembly for the other half of the keyboard.
18. Lastly, put a little bit of adhesive on on the button of the reset switch. Now attach the reset switch cover and press it down slightly. The stl files for the reset switch cover can be found in /3dfiles. Make sure to print them at the highest quality setting to ensure accuracy. ![reset switch cover](./imgs/IMG_5309.jpeg)
### credits
- Thanks to [mikeholscher](https://github.com/mikeholscher) for the bases of the pg1316 footprints. I modified them slightly to improve soldering and adapted them to ergogen but the original was provided on his [Github](https://github.com/mikeholscher/zmk-config-mikefive/tree/main/files/footprint-and-cad)
- Thanks to these tools for making creating zmk pyhsical layouts easier:
    - [Zmk pyhsical layout converter](https://zmk-physical-layout-converter.streamlit.app/)
    - [Keymap layout helper](https://nickcoutsos.github.io/keymap-layout-tools/)

module.exports = {
    params: {
        P0: { type: 'net', value: 'P0' },
        P1: { type: 'net', value: 'P1' },
        P2: { type: 'net', value: 'P2' },
        P3: { type: 'net', value: 'P3' },
        P4: { type: 'net', value: 'P4' },
        P5: { type: 'net', value: 'P5' },
        P6: { type: 'net', value: 'P6' },
        P7: { type: 'net', value: 'P7' },
        P8: { type: 'net', value: 'P8' },
        P9: { type: 'net', value: 'P9' },
        P10: { type: 'net', value: 'P10' },
        VCC33: { type: 'net', value: 'VCC33' },
        VCC5: { type: 'net', value: 'VCC5' },
        GND: { type: 'net', value: 'GND' },
        RST: { type: 'net', value: 'RST' },
        RAW: { type: 'net', value: 'RAW' },
        GND: { type: 'net', value: 'GND' },
        DIO: { type: 'net', value: 'DIO' },
        CLK: { type: 'net', value: 'CLK' },
    },
    body: p => {

        return `(footprint "XIAO-nRF52840-SMD"
	(version 20240108)
	(generator "pcbnew")
	(generator_version "8.0")
	(layer "F.Cu")
    ${p.at}
	(property "Reference" "REF**"
		(at -9.445 -11.5 0)
		(layer "F.SilkS")
		(uuid "a9f5f5dd-597c-45dd-b31d-a35c3963eed2")
		(effects
			(font
				(size 0.78232 0.78232)
				(thickness 0.10668)
			)
			(justify left bottom)
		)
	)
	(property "Value" "XIAO-nRF52840-SMD"
		(at 0.055 6.5 0)
		(layer "F.Fab")
		(uuid "2d66aca7-e0b3-44df-838e-be285890792c")
		(effects
			(font
				(size 0.635 0.635)
				(thickness 0.1016)
				(bold yes)
			)
		)
	)
	(property "Footprint" ""
		(at -8.945 10.5 0)
		(unlocked yes)
		(layer "F.Fab")
		(hide yes)
		(uuid "32a8cb35-59e0-4282-b955-c4626b0c3c52")
		(effects
			(font
				(size 1.27 1.27)
				(thickness 0.15)
			)
		)
	)
	(property "Datasheet" ""
		(at -8.945 10.5 0)
		(unlocked yes)
		(layer "F.Fab")
		(hide yes)
		(uuid "5173b428-b87b-497c-9fd1-0d444c2ced85")
		(effects
			(font
				(size 1.27 1.27)
				(thickness 0.15)
			)
		)
	)
	(property "Description" ""
		(at -8.945 10.5 0)
		(unlocked yes)
		(layer "F.Fab")
		(hide yes)
		(uuid "ea7181c4-fdca-44f1-ad15-d0627f50a68e")
		(effects
			(font
				(size 1.27 1.27)
				(thickness 0.15)
			)
		)
	)
	(fp_line
		(start -8.945 8.513)
		(end -8.945 -8.632)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "F.SilkS")
		(uuid "8a7be5e1-8faa-4d03-9a20-d29ab96672d0")
	)
	(fp_line
		(start -7.04 10.418)
		(end 6.93 10.418)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "F.SilkS")
		(uuid "2817b8f1-751e-4951-83ba-c4b96288a0ba")
	)
	(fp_line
		(start -4.55 -10.537)
		(end -4.546272 -11.547272)
		(stroke
			(width 0.127)
			(type solid)
		)
		(layer "F.SilkS")
		(uuid "5fa669ee-204f-41e8-bc6f-c9a86f966424")
	)
	(fp_line
		(start -4.046272 -12.047)
		(end 3.949 -12.047)
		(stroke
			(width 0.127)
			(type solid)
		)
		(layer "F.SilkS")
		(uuid "26723a81-2950-433f-a624-3a103ec1f1e4")
	)
	(fp_line
		(start 4.449 -11.547)
		(end 4.449 -10.537)
		(stroke
			(width 0.127)
			(type solid)
		)
		(layer "F.SilkS")
		(uuid "6fe17c8b-5beb-4b13-857a-e64aa79c5f2a")
	)
	(fp_line
		(start 6.93 -10.537)
		(end -7.04 -10.537)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "F.SilkS")
		(uuid "5c6ce99b-1b73-44ce-8ed4-3f47efe58872")
	)
	(fp_line
		(start 8.835 8.513)
		(end 8.835 -8.632)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "F.SilkS")
		(uuid "1b7cbf52-f9e0-416d-8dd4-029d63ca53ca")
	)
	(fp_arc
		(start -8.945 -8.636)
		(mid -8.387038 -9.983038)
		(end -7.04 -10.541)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "F.SilkS")
		(uuid "715aae0c-2ac2-4af3-a3e7-1ddec19188b8")
	)
	(fp_arc
		(start -7.04 10.418)
		(mid -8.387038 9.860038)
		(end -8.945 8.513)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "F.SilkS")
		(uuid "46edc068-0108-4c9f-9b57-7addc169ff8a")
	)
	(fp_arc
		(start -4.546272 -11.547272)
		(mid -4.399724 -11.900644)
		(end -4.046272 -12.047)
		(stroke
			(width 0.127)
			(type default)
		)
		(layer "F.SilkS")
		(uuid "df5004bd-0ec2-4c7c-bb6f-0c39266a8733")
	)
	(fp_arc
		(start 3.949 -12.047)
		(mid 4.302524 -11.900524)
		(end 4.449 -11.547)
		(stroke
			(width 0.127)
			(type default)
		)
		(layer "F.SilkS")
		(uuid "ab7fdfcd-e576-4de3-8e5e-63a34e8c58f1")
	)
	(fp_arc
		(start 6.93 -10.537)
		(mid 8.277024 -9.979024)
		(end 8.835 -8.632)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "F.SilkS")
		(uuid "04c0b067-abfb-4462-a7f0-9ee1718f000a")
	)
	(fp_arc
		(start 8.835 8.513)
		(mid 8.277038 9.860038)
		(end 6.93 10.418)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "F.SilkS")
		(uuid "e03b7234-6f3c-4587-ae2b-356cc3648285")
	)
	(fp_circle
		(center -9.155 -10.121)
		(end -9.155 -10.375)
		(stroke
			(width 0.5)
			(type solid)
		)
		(fill solid)
		(layer "F.SilkS")
		(uuid "6e9fe385-0c25-49a6-b403-76dfba8d83d5")
	)
	(fp_circle
		(center -7.881 -9.404)
		(end -7.881 -9.658)
		(stroke
			(width 0.5)
			(type solid)
		)
		(fill solid)
		(layer "F.SilkS")
		(uuid "9099b789-fa66-406d-8f2a-bc85ca327ed4")
	)
	(fp_rect
		(start -8.945 -10.55)
		(end 8.855 10.4)
		(stroke
			(width 0.05)
			(type default)
		)
		(fill none)
		(layer "F.CrtYd")
		(uuid "36353154-e66f-4003-b4e9-33860cefd7b8")
	)
	(fp_rect
		(start -8.945 -10.55)
		(end 8.855 10.4)
		(stroke
			(width 0.1)
			(type default)
		)
		(fill none)
		(layer "F.Fab")
		(uuid "49ce88b5-09c8-455e-9660-839b415227c4")
	)
	(fp_circle
		(center -7.861 -9.4)
		(end -7.861 -9.654)
		(stroke
			(width 0.5)
			(type solid)
		)
		(fill solid)
		(layer "F.Fab")
		(uuid "7bc235cf-ac41-4529-806b-158b8898c264")
	)
	(pad "1" smd roundrect
		(at -8.455 -7.62 180)
		(size 2.432 1.524)
		(layers "F.Cu" "F.Mask")
		(roundrect_rratio 0.1)
		(thermal_bridge_angle 45)
		(uuid "82bbfb55-8baa-4218-ac89-ab07d82ef7f8")
        ${p.P0.str}
	)
	(pad "1" thru_hole circle
		(at -7.62 -7.62 180)
		(size 1.524 1.524)
		(drill 0.889)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(uuid "f2fffd4f-460c-4b4d-b954-811e935ed1d6")
        ${p.P0.str}
	)
	(pad "2" smd roundrect
		(at -8.455 -5.08 180)
		(size 2.432 1.524)
		(layers "F.Cu" "F.Mask")
		(roundrect_rratio 0.1)
		(thermal_bridge_angle 45)
		(uuid "18ef9914-2d15-494c-9020-2334abcc1460")

        ${p.P1.str}
	)
	(pad "2" thru_hole circle
		(at -7.62 -5.08 180)
		(size 1.524 1.524)
		(drill 0.889)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(uuid "4732cc3f-e641-4870-a9b3-ae13729c7bba")

        ${p.P1.str}
	)
	(pad "3" smd roundrect
		(at -8.455 -2.54 180)
		(size 2.432 1.524)
		(layers "F.Cu" "F.Mask")
		(roundrect_rratio 0.1)
		(thermal_bridge_angle 45)
		(uuid "15338a55-8514-4218-a2c1-2cae003104c3")

        ${p.P2.str}
	)
	(pad "3" thru_hole circle
		(at -7.62 -2.54 180)
		(size 1.524 1.524)
		(drill 0.889)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(uuid "0cef5e55-d8ff-4394-9cc1-cc318608b0d9")


        ${p.P2.str}
	)
	(pad "4" smd roundrect
		(at -8.455 0 180)
		(size 2.432 1.524)
		(layers "F.Cu" "F.Mask")
		(roundrect_rratio 0.1)
		(thermal_bridge_angle 45)
		(uuid "191a259d-5773-4a80-91de-baa69611fab8")

        ${p.P3.str}
	)
	(pad "4" thru_hole circle
		(at -7.62 0 180)
		(size 1.524 1.524)
		(drill 0.889)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(uuid "200b8da4-9395-48a5-b7ac-92a6a147c215")

        ${p.P3.str}
	)
	(pad "5" smd roundrect
		(at -8.455 2.54 180)
		(size 2.432 1.524)
		(layers "F.Cu" "F.Mask")
		(roundrect_rratio 0.1)
		(thermal_bridge_angle 45)
		(uuid "52012467-1c46-4a8e-aa82-6f6ce69bd2ca")

        ${p.P4.str}
	)
	(pad "5" thru_hole circle
		(at -7.62 2.54 180)
		(size 1.524 1.524)
		(drill 0.889)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(uuid "2b50ccce-3634-47d1-bf7d-a3db4f3f9a9f")
        ${p.P4.str}
	)
	(pad "6" smd roundrect
		(at -8.455 5.08 180)
		(size 2.432 1.524)
		(layers "F.Cu" "F.Mask")
		(roundrect_rratio 0.1)
		(thermal_bridge_angle 45)
		(uuid "04aeaf95-142a-40f6-97a3-04453fc50824")

        ${p.P5.str}
	)
	(pad "6" thru_hole circle
		(at -7.62 5.08 180)
		(size 1.524 1.524)
		(drill 0.889)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(uuid "7636de9d-d8e5-49c9-9fff-0cd76515690d")
        ${p.P5.str}
	)
	(pad "7" smd roundrect
		(at -8.455 7.62 180)
		(size 2.432 1.524)
		(layers "F.Cu" "F.Mask")
		(roundrect_rratio 0.1)
		(thermal_bridge_angle 45)
		(uuid "e997fd0b-233a-4656-afad-cb2f8b9d87c9")
        ${p.P6.str}
	)
	(pad "7" thru_hole circle
		(at -7.62 7.62 180)
		(size 1.524 1.524)
		(drill 0.889)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(uuid "9d2c0d0c-05dd-477e-8384-b14eec83fc2e")
        ${p.P6.str}
	)
	(pad "8" thru_hole circle
		(at 7.62 7.62)
		(size 1.524 1.524)
		(drill 0.889)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(uuid "1e50c66f-49b8-4b03-9889-8cc6ca45ad8e")

        ${p.P7.str}
	)
	(pad "8" smd roundrect
		(at 8.455 7.62)
		(size 2.432 1.524)
		(layers "F.Cu" "F.Mask")
		(roundrect_rratio 0.1)
		(thermal_bridge_angle 45)
		(uuid "e7b72803-b5f0-433c-8313-83247355fb43")

        ${p.P7.str}
	)
	(pad "9" thru_hole circle
		(at 7.62 5.08)
		(size 1.524 1.524)
		(drill 0.889)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(uuid "808bf9dc-1c26-4a77-93c9-e4c6d5eccbb2")

        ${p.P8.str}
	)
	(pad "9" smd roundrect
		(at 8.455 5.08)
		(size 2.432 1.524)
		(layers "F.Cu" "F.Mask")
		(roundrect_rratio 0.1)
		(thermal_bridge_angle 45)
		(uuid "532de3b6-bd30-47c5-b70e-0bca6abbd997")

        ${p.P8.str}
	)
	(pad "10" thru_hole circle
		(at 7.62 2.54)
		(size 1.524 1.524)
		(drill 0.889)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(uuid "a792a2ac-537b-4136-8f92-b81f7ce8f753")
        ${p.P9.str}
	)
	(pad "10" smd roundrect
		(at 8.455 2.54)
		(size 2.432 1.524)
		(layers "F.Cu" "F.Mask")
		(roundrect_rratio 0.1)
		(thermal_bridge_angle 45)
		(uuid "6e3f5c75-6143-468e-bb07-d89020c03f59")

        ${p.P9.str}
	)
	(pad "11" thru_hole circle
		(at 7.62 0)
		(size 1.524 1.524)
		(drill 0.889)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(uuid "fb78046a-9b91-4893-b010-827957cc07be")
        ${p.P10.str}
	)
	(pad "11" smd roundrect
		(at 8.455 0)
		(size 2.432 1.524)
		(layers "F.Cu" "F.Mask")
		(roundrect_rratio 0.1)
		(thermal_bridge_angle 45)
		(uuid "5249f425-bece-432d-8076-28e1b8b386e3")
        ${p.P10.str}
	)
	(pad "12" thru_hole circle
		(at 7.62 -2.54)
		(size 1.524 1.524)
		(drill 0.889)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(uuid "0b8ccc97-5100-4dcf-8500-e99789ee0b4c")

        ${p.VCC33.str}

	)
	(pad "12" smd roundrect
		(at 8.455 -2.54)
		(size 2.432 1.524)
		(layers "F.Cu" "F.Mask")
		(roundrect_rratio 0.1)
		(thermal_bridge_angle 45)
		(uuid "82f1bbd1-708b-4d2d-9113-7ba3c2313670")
        ${p.VCC33.str}
	)
	(pad "13" thru_hole circle
		(at 7.62 -5.08)
		(size 1.524 1.524)
		(drill 0.889)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(uuid "03882061-01af-484b-b620-9e92a3daaf68")
        ${p.GND.str}
	)
	(pad "13" smd roundrect
		(at 8.455 -5.08)
		(size 2.432 1.524)
		(layers "F.Cu" "F.Mask")
		(roundrect_rratio 0.1)
		(thermal_bridge_angle 45)
		(uuid "954f51d1-3d75-42fb-a02a-7389b30718d9")
        ${p.GND.str}
	)
	(pad "14" thru_hole circle
		(at 7.62 -7.62)
		(size 1.524 1.524)
		(drill 0.889)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(uuid "c6d1af47-da13-4409-9ab1-55d358cc57eb")

        ${p.VCC5.str}
	)
	(pad "14" smd roundrect
		(at 8.455 -7.62)
		(size 2.432 1.524)
		(layers "F.Cu" "F.Mask")
		(roundrect_rratio 0.1)
		(thermal_bridge_angle 45)
		(uuid "6b725fd4-d6f0-46bf-b3e0-7ec07cc05622")
        ${p.VCC5.str}
	)

    (fp_line (start -5 0.6) (end  -2 0.6) (layer "Edge.Cuts") (width 0.15))
    (fp_line (start -5 -3.1) (end  -2 -3.1) (layer "Edge.Cuts") (width 0.15))
    (fp_line (start -5 0.6) (end  -5 -3.1) (layer "Edge.Cuts") (width 0.15))
    (fp_line (start -2 0.6) (end  -2 -3.1) (layer "Edge.Cuts") (width 0.15))

    (pad "15" thru_hole circle
		(at -5 -0.3135 180)
        (size 1.5 1.5)
        (drill 1.0)
		(layers "F.Cu" "F.Paste" "F.Mask")
        (uuid e683fc44-0b06-4166-aece-8ad56167ede3 )
        ${p.RAW.str}
    )
    (pad "16" thru_hole circle
		(at -5 -2.2185 180)
        (size 1.5 1.5)
        (drill 1.0)
		(layers "F.Cu" "F.Paste" "F.Mask")
        (uuid e683fc44-0b06-4166-aece-8ad56167ede3 )
        ${p.GND.str}
    )
	(pad "17" smd roundrect
		(at 3.755 9.2369 270)
		(size 2.5 1.1)
		(layers "F.Cu" "F.Paste" "F.Mask")
		(roundrect_rratio 0.25)
		(solder_mask_margin 0.0508)
		(thermal_bridge_angle 45)
		(uuid "912f339b-da23-4429-b096-f30b25320685")
	)
	(pad "18" smd roundrect
		(at 5.66 9.2369 270)
		(size 2.5 1.1)
		(layers "F.Cu" "F.Paste" "F.Mask")
		(roundrect_rratio 0.25)
		(solder_mask_margin 0.0508)
		(thermal_bridge_angle 45)
		(uuid "ae670273-d1f8-43e0-9bf0-a2bbbf7d4ee6")
	)

    (fp_circle
        (center -0.05 -7.3)
        (end    -2 -7.3)      
        (layer "Edge.Cuts")
        (width 0.15)
    )
	(pad "19" thru_hole circle
		(at -1.325 -8.5685)
		(size 1.7 1.7)
        (drill 1.0)
		(layers "F.Cu" "F.Paste" "F.Mask")
		(uuid "ad890579-1e55-4b71-9d59-080a59598896")
        ${p.DIO.str}
	)
	(pad "20" thru_hole circle
		(at 1.215 -8.5685)
		(size 1.7 1.7)
        (drill 1.0)
		(layers "F.Cu" "F.Paste" "F.Mask")
		(uuid "22959b7c-559b-4b72-b2a4-a0d26b3295b4")
        ${p.CLK.str}
	)
	(pad "21"  thru_hole circle
		(at -1.325 -6.0285)
		(size 1.7 1.7)
        (drill 1.0)
		(layers "F.Cu" "F.Paste" "F.Mask")
		(uuid "b41f05b6-c247-4448-ade6-b9856922e9c3")
        ${p.RST.str}
	)
	(pad "22" thru_hole circle
		(at 1.215 -6.0285)
		(size 1.7 1.7)
        (drill 1.0)
		(layers "F.Cu" "F.Paste" "F.Mask")
		(uuid "f7daaee5-3d37-4977-8c14-d58689c2eaf6")
        ${p.GND.str}
	)


)`

    }
}

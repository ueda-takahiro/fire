# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# #親
# head = Personality.create(point: "頭")
# body = Personality.create(point: "体")
# hand = Personality.create(point: "手")
# leg = Personality.create(point: "足")
# # skin = BadPartOfBody.create(point: "皮膚")

# #頭子
# head1_child = head.children.create(point: "前頭部")
# head2_child = head.children.create(point: "側頭部")
# head3_child = head.children.create(point: "後頭部")
# head4_child = head.children.create(point: "耳")
# head5_child = head.children.create(point: "目")
# head6_child = head.children.create(point: "鼻")
# head7_child = head.children.create(point: "口")



# #頭孫
# head1_child.children.create([{point: "鈍痛"}, {point: "刺すような痛み"}, {point: "目眩"}])
# head2_child.children.create([{point: "鈍痛"}, {point: "刺すような痛み"}, {point: "目眩"}])
# head3_child.children.create([{point: "鈍痛"}, {point: "刺すような痛み"}, {point: "目眩"}])
# head4_child.children.create([{point: "鈍痛"}, {point: "腫れ"}, {point: "聞こえが悪い"}, {point: "変な音が聞こえる"}])
# head5_child.children.create([{point: "刺すような痛み"}, {point: "腫れ"}, {point: "痒い"}, {point: "目やに"}, {point: "涙が出る"}, {point: "充血"}])
# head6_child.children.create([{point: "鼻血"}, {point: "鼻水"}, {point: "鼻詰まり"}])
# head7_child.children.create([{point: "鈍痛"}, {point: "刺すような痛み"}, {point: " 腫れ"}, {point: "血が出る"}, {point: "滲みる"}])



# #体子
# body1_child = body.children.create(point: "胸部")
# body2_child = body.children.create(point: "腹部")
# body3_child = body.children.create(point: "背部")
# body4_child = body.children.create(point: "陰部")
# body5_child = body.children.create(point: "腰部")
# body6_child = body.children.create(point: "臀部")

# #体孫
# body1_child.children.create([{point: "締め付けるような痛み"}, {point: "刺すような痛み"}, {point: "呼吸がしづらい"}, {point: "脈が速い"}])
# body2_child.children.create([{point: "鈍痛"}, {point: "刺すような痛み"}, {point: "下痢"}, {point: "便秘"}])
# body3_child.children.create([{point: "鈍痛"}, {point: "刺すような痛み"}])
# body4_child.children.create([{point: "鈍痛"}, {point: "刺すような痛み"}, {point: "腫れ"}, {point: "湿疹"}])
# body5_child.children.create([{point: "鈍痛"}, {point: "刺すような痛み"}])
# body6_child.children.create([{point: "鈍痛"}, {point: "刺すような痛み"}, {point: "腫れ"}, {point: "湿疹"}])

# #手子
# hand1_child = hand.children.create([{point: "鈍痛"}, {point: "刺すような痛み"}, {point: "腫れ"}])

# #足子
# leg1_child = leg.children.create([{point: "鈍痛"}, {point: "刺すような痛み"}, {point: "痒み"}, {point: "湿疹"}])




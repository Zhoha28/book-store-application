/**
 * @author Zhoha Damani
 * @email zhohadamani@gmail.com
 */

aboutInfo = [
    {
        name: 'BOOKIN',
        description: 'Not only is the store a valuable resource for procuring unique, quality books and magazines of all descriptions, but we provide the region with a thriving cultural drop-in centre for arts and literature-related community events. We are dedicated to stocking the very best in new Canadian and international fiction, a vast and carefully considered backlist of titles (including a top-notch Mystery section!).  We are happy to special-order anything else you might need and we pride ourselves at being able to obtain the “hard-to-find” and the “out-of-print.”',
        
    
    }
];


listFeatures = ["Best Quality Books", "100% customer satisfaction","30 days money back garenty"]


module.exports.aboutInfo = (req,res) => {
    res.render('about', { title: 'About  my  site', aboutInfo: aboutInfo, featureList: listFeatures });
};


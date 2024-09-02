

function rotate(svg, angle=-90, cx=0, cy=0){
    if (svg.transform.baseVal.numberOfItems < 2) {
        var transform = svg.createSVGTransform();
        transform.setRotate(angle, 100, 100);
        svg.transform.baseVal.appendItem(transform);
    } else {
      svg.transform.baseVal.getItem(1).setRotate(angle, cx, cy);
    }
}


function translate(svg, dx, dy){
    if (svg.transform.baseVal.numberOfItems < 2) {
        var transform = svg.createSVGTransform();
        transform.setRotate(angle, 100, 100);
        svg.transform.baseVal.appendItem(transform);
    } else {
      svg.transform.baseVal.getItem(1).setRotate(angle, cx, cy);
    }
}
